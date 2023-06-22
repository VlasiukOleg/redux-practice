import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BackDrop, Modal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const BackdropModal = ({ onClose, handleBackdropClick, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return createPortal(
    <BackDrop onClick={handleBackdropClick}>
      <Modal>
        <button type="button" onClick={onClose}>
          Close Modal
        </button>
        {children}
      </Modal>
    </BackDrop>,
    modalRoot
  );
};

// export class OldBackdropModal extends Component {
//   componentDidMount() {
//     console.log('componentDidMount');
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     console.log('componentWillMount');
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     {
//       if (e.code === 'Escape') {
//         console.log(e.code);
//         this.props.onClose();
//       }
//     }
//   };

//   render() {
//     return createPortal(
//       <BackDrop onClick={this.props.handleBackdropClick}>
//         <Modal>
//           <button type="button" onClick={this.props.onClose}>
//             Close Modal
//           </button>
//           {this.props.children}
//         </Modal>
//       </BackDrop>,
//       modalRoot
//     );
//   }
// }
