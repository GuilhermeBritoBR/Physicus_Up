import { Modal } from "react-native";

//componente que sobrepõe as páginas da aplicação
export default function ModalCsomponent({ open, children }) {
  return (
    <Modal visible={open} animationType="fade">
      {children}
    </Modal>
  );
}
