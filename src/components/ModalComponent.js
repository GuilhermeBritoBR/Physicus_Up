import { Modal } from "react-native";

export default function ModalComponent({ open, children, vidro }) {
  return (
    <Modal
      onRequestClose={vidro}
      transparent={vidro}
      visible={open}
      animationType="fade"
    >
      {children}
    </Modal>
  );
}
