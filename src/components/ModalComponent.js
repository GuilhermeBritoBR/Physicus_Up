import { Modal } from "react-native";

//componente que sobrepõe as páginas da aplicação
export default function ModalCsomponent({ open, children, transparencia }) {
  return (
    <Modal visible={open} transparent={transparencia} animationType="fade">
      {children}
    </Modal>
  );
}
