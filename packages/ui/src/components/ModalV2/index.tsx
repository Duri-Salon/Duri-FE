import Portal from '../Portal';

interface ModalProps {
  isOpen?: boolean;
}

const ModalV2 = ({ isOpen }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal portalKey="modal-layout">
      <div>modal</div>
    </Portal>
  );
};

export default ModalV2;
