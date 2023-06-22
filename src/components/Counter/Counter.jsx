import React, { useEffect, useState } from 'react';
import { CounterWrap } from './Counter.styled';

export const Counter = ({ step }) => {
  const [value, setValue] = useState(5);
  const [counterClick, setcounterClick] = useState(0);

  const onIncreament = () => {
    console.log('Click');
    setValue(state => state + step);
    setcounterClick(state => state + 1);
  };

  const onDecrement = () => {
    setValue(state => state - step);
    setcounterClick(state => state + 1);
  };

  useEffect(() => {
    document.title = `Всього клікнули ${counterClick} разів`;
  }, [counterClick]);

  return (
    <CounterWrap>
      <span>{value}</span>
      <div>
        <button type="button" onClick={onIncreament}>
          Increament {step}
        </button>
        <button type="button" onClick={onDecrement}>
          Decreament {step}
        </button>
      </div>
    </CounterWrap>
  );
};

// export class OldCounter extends Component {
//   state = {
//     value: this.props.initialValue,
//   };

//   onIncreament = () => {
//     this.setState(prevState => ({
//       value: prevState.value + this.props.step,
//     }));
//   };

//   onDeacrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - this.props.step,
//     }));
//   };

//   render() {
//     const { step } = this.props;

//     return (
//       <CounterWrap>
//         <span>{this.state.value}</span>
//         <div>
//           <button type="button" onClick={this.onIncreament}>
//             Increament {step}
//           </button>
//           <button type="button" onClick={this.onDeacrement}>
//             Decreament {step}
//           </button>
//         </div>
//       </CounterWrap>
//     );
//   }
// }
