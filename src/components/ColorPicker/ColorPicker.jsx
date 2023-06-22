import React, { useState, memo } from 'react';
import { ColorPickerWrap } from './ColorPicker.styled';
import { ColorPickerBtn } from './ColorPicker.styled';

export const ColorPicker = memo(({ colors }) => {
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);

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
          onClick={() => setActiveBtnIndex(index)}
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
