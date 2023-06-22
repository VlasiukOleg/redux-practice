// import React, { useEffect, useState } from 'react';
import { CounterWrap } from './Counter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { decrementValue, incrementValue } from 'redux/actions';

import { getStep, getTotal } from 'redux/selectors';

export const Counter = () => {
  const total = useSelector(getTotal);
  const step = useSelector(getStep);

  const dispatch = useDispatch();
  // const [value, setValue] = useState(5);
  // const [counterClick, setcounterClick] = useState(0);

  const onIncrement = () => {
    console.log('Click');
    dispatch(incrementValue(step));
    // setValue(state => state + step);
    // setcounterClick(state => state + 1);
  };

  const onDecrement = () => {
    dispatch(decrementValue(step));
    // setValue(state => state - step);
    // setcounterClick(state => state + 1);
  };

  // useEffect(() => {
  //   document.title = `Всього клікнули ${counterClick} разів`;
  // }, [counterClick]);

  return (
    <CounterWrap>
      <span>{total}</span>
      <div>
        <button type="button" onClick={onIncrement}>
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
