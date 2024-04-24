
import { Modal } from "react-native";


export default function ModalComponent({open, children}) {
    const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

    return (
        <Modal visible = {open}
        animationType="fade"
        >
            {children}
        </Modal>
        
    );
};