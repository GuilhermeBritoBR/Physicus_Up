import { Modal } from "react-native";

export default function ModalComponent({ open, children, close, vidro }) {
  return (
    <Modal
      onRequestClose={close}
      transparent={vidro}
      visible={open}
      animationType="fade"
    >
      {children}
    </Modal>
  );
}
