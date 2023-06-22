import { useState } from 'react';
import { ToDoFormEditor } from './ToDoEditor.styled';
import shortid from 'shortid';

export const ToDoEditor = ({ onAddToDo }) => {
  const [text, setText] = useState('');

  const handleChange = evt => {
    setText(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onAddToDo({
      id: shortid.generate(),
      text: text,
      completed: false,
    });

    setText('');
  };

  return (
    <ToDoFormEditor onSubmit={handleSubmit}>
      <textarea value={text} onChange={handleChange}></textarea>
      <button type="submit">Додати</button>
    </ToDoFormEditor>
  );
};

// export class OldToDoEditor extends Component {
//   state = {
//     text: '',
//   };

//   handleChange = e => {
//     this.setState({ text: e.currentTarget.value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     this.props.onAddToDo({
//       id: shortid.generate(),
//       text: this.state.text,
//       completed: false,
//     });

//     this.setState({ text: '' });
//   };

//   render() {
//     return (
//       <ToDoFormEditor onSubmit={this.handleSubmit}>
//         <textarea
//           value={this.state.text}
//           onChange={this.handleChange}
//         ></textarea>
//         <button type="submit">Додати</button>
//       </ToDoFormEditor>
//     );
//   }
// }
