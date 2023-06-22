import { BackdropModal } from 'components/Modal/Modal';

export const FormModalPage = ({
  showModal,
  onClose,
  handleBackdropClick,
  toogleModal,
}) => {
  return (
    <main>
      <button type="button" onClick={toogleModal}>
        Open Modal
      </button>
      {showModal && (
        <BackdropModal
          showModal={showModal}
          onClose={onClose}
          handleBackdropClick={handleBackdropClick}
        >
          <h1>Title as children modal</h1>
        </BackdropModal>
      )}
    </main>
  );
};
