import React, { memo } from 'react';
import { ColorPickerWrap } from './ColorPicker.styled';
import { ColorPickerBtn } from './ColorPicker.styled';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { setActiveBtnIndex } from 'redux/colorpicker/colorpickerSlice';
import { getActiveBtnIndex, getColors } from 'redux/colorpicker/selectors';

export const ColorPicker = memo(() => {
  const dispatch = useDispatch();

  const colors = useSelector(getColors);
  const activeBtnIndex = useSelector(getActiveBtnIndex);

  console.log(colors);

  const { label } = colors[activeBtnIndex];

  return (
    <ColorPickerWrap>
      <h1>Color Picker</h1>
      <p>Вибран колір: {label}</p>
      <p>Доступна кількість кольорів: {colors.length}</p>
      {colors.map(({ color, label }, index) => (
        <ColorPickerBtn
          key={label}
          color={color}
          index={index}
          state={activeBtnIndex}
          onClick={() => dispatch(setActiveBtnIndex(index))}
        ></ColorPickerBtn>
      ))}
    </ColorPickerWrap>
  );
});

// export class OldColorPicker extends Component {
//   state = {
//     activeBtnIndex: 0,
//   };

//   activeBtn = index => {
//     this.setState({ activeBtnIndex: index });
//   };

//   render() {
//     const { colors } = this.props;
//     const { activeBtnIndex } = this.state;
//     const { label } = colors[activeBtnIndex];

//     return (
//       <ColorPickerWrap>
//         <h1>Color Picker</h1>
//         <p>Вибран колір: {label}</p>
//         <p>Доступна кількість кольорів: {colors.length}</p>
//         {colors.map(({ color, label }, index) => (
//           <ColorPickerBtn
//             key={label}
//             color={color}
//             index={index}
//             state={activeBtnIndex}
//             onClick={() => this.activeBtn(index)}
//           ></ColorPickerBtn>
//         ))}
//       </ColorPickerWrap>
//     );
//   }
// }
