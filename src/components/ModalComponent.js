
import { Modal } from "react-native";

export default function ModalComponent({open, children}) {
    return (
        <Modal visible = {open}
        animationType="fade"
        >
            {children}
        </Modal>
        
    );
};