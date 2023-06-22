import React, { useState } from 'react';
import { DropDownWrap, DropDownMenu } from './DropDown.styled';

export const DropDown = () => {
  const [visible, setVisible] = useState(false);

  const toogle = () => {
    setVisible(prevState => !prevState);
  };

  return (
    <DropDownWrap>
      <button type="button" onClick={toogle}>
        {visible ? 'Скрыть' : 'Показать'}
      </button>
      {visible && <DropDownMenu>Выпадающее меню</DropDownMenu>}
    </DropDownWrap>
  );
};

// export class OldDropDown extends Component {
//   state = {
//     visible: false,
//   };

//   toogle = () => {
//     this.setState(prevState => ({
//       visible: !prevState.visible,
//     }));
//   };

//   render() {
//     return (
//       <DropDownWrap>
//         <button type="button" onClick={this.toogle}>
//           {this.state.visible ? 'Скрыть' : 'Показать'}
//         </button>
//         {this.state.visible && <DropDownMenu>Выпадающее меню</DropDownMenu>}
//       </DropDownWrap>
//     );
//   }
// }
