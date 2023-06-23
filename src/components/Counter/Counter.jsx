// import React, { useEffect, useState } from 'react';
import { CounterWrap } from './Counter.styled';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import { decrementValue, incrementValue } from 'redux/actions';

import { increment, decrement, counterClickBtn } from 'redux/counterSlice';

import { getStep, getTotal, getCounterClick } from 'redux/selectors';

export const Counter = () => {
  const total = useSelector(getTotal);
  const step = useSelector(getStep);
  const counterClick = useSelector(getCounterClick);

  const dispatch = useDispatch();
  // const [value, setValue] = useState(5);
  // const [counterClick, setcounterClick] = useState(0);

  const onIncrement = () => {
    console.log('Click');
    dispatch(increment(step));
    dispatch(counterClickBtn());
    // setValue(state => state + step);
    // setcounterClick(state => state + 1);
  };

  const onDecrement = () => {
    dispatch(decrement(step));
    dispatch(counterClickBtn());
    // setValue(state => state - step);
    // setcounterClick(state => state + 1);
  };

  useEffect(() => {
    document.title = `Всього клікнули ${counterClick} разів`;
  }, [counterClick]);

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
