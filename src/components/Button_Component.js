import { TouchableOpacity, Text } from "react-native";
import { DefaultStyles } from "../styles/DefaultStyles";
export default function Button_Component({
  Button_title,
  fundo_buttom,
  colorText_buttom,
  Pressionamento,
}) {
  return (
    <TouchableOpacity
      onPress={Pressionamento}
      style={[DefaultStyles.Touch, { backgroundColor: fundo_buttom }]}
    >
      <Text style={{ color: colorText_buttom }}>{Button_title}</Text>
    </TouchableOpacity>
  );
}
