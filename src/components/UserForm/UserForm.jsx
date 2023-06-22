import './UserForm.css';
import { useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStoraje';

export const UserForm = ({ onSubmit }) => {
  const [userName, setUserName] = useLocalStorage('userName', '');
  const [nickName, setNickName] = useLocalStorage('nickName', '');
  const [experience, setExperience] = useState('junior');
  const [licence, setLicence] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleOnChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'nickName':
        setNickName(value);
        break;
      case 'experience':
        setExperience(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ userName, nickName, experience });
    setUserName('');
    setNickName('');
  };

  const handleLicenceChecked = e => {
    setLicence(e.currentTarget.checked);
    setAgree(e.currentTarget.checked);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Name
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={handleOnChange}
        />
      </label>
      <label className="form__label">
        NickName
        <input
          type="text"
          name="nickName"
          value={nickName}
          onChange={handleOnChange}
        />
      </label>
      <div>
        <label>
          <input
            type="radio"
            name="experience"
            checked={experience === 'junior'}
            value="junior"
            onChange={handleOnChange}
          ></input>
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            checked={experience === 'middle'}
            value="middle"
            onChange={handleOnChange}
          ></input>
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            checked={experience === 'senior'}
            value="senior"
            onChange={handleOnChange}
          ></input>
          Senior
        </label>
      </div>
      <p>
        <label>
          <input
            type="checkbox"
            name=""
            checked={licence}
            onChange={handleLicenceChecked}
          />
          Згоден
        </label>
      </p>

      <button type="submit" disabled={!agree}>
        Відправити
      </button>
    </form>
  );
};

// export class OldUserForm extends Component {
//   state = {
//     name: '',
//     nickName: '',
//     experience: 'junior',
//     licence: false,
//     agree: false,
//   };

//   handleOnChange = event => {
//     this.setState({ [event.currentTarget.name]: event.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   handleLicenceChecked = e => {
//     console.log(e.currentTarget.checked);

//     this.setState({
//       licence: e.currentTarget.checked,
//       agree: e.currentTarget.checked,
//     });
//   };

//   reset = () => {
//     this.setState({ name: '', nickName: '' });
//   };

//   render() {
//     return (
//       <form className="form" onSubmit={this.handleSubmit}>
//         <label className="form__label">
//           Name
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleOnChange}
//           />
//         </label>
//         <label className="form__label">
//           NickName
//           <input
//             type="text"
//             name="nickName"
//             value={this.state.nickName}
//             onChange={this.handleOnChange}
//           />
//         </label>
//         <div>
//           <label>
//             <input
//               type="radio"
//               name="experience"
//               checked={this.state.experience === 'junior'}
//               value="junior"
//               onChange={this.handleOnChange}
//             ></input>
//             Junior
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="experience"
//               checked={this.state.experience === 'middle'}
//               value="middle"
//               onChange={this.handleOnChange}
//             ></input>
//             Middle
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="experience"
//               checked={this.state.experience === 'senior'}
//               value="senior"
//               onChange={this.handleOnChange}
//             ></input>
//             Senior
//           </label>
//         </div>
//         <p>
//           <label>
//             <input
//               type="checkbox"
//               name=""
//               checked={this.state.licence}
//               onChange={this.handleLicenceChecked}
//             />
//             Згоден
//           </label>
//         </p>

//         <button type="submit" disabled={!this.state.agree}>
//           Відправити
//         </button>
//       </form>
//     );
//   }
// }
