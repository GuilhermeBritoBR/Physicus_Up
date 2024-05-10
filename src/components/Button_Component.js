import { TouchableOpacity, Text } from "react-native";
import { DefaultStyles } from "../styles/DefaultStyles";
export default function Button_Component({
  Button_title,
  fundo_buttom,
  colorText_buttom,
  Pressionamento,
  altura,
}) {
  return (
    <TouchableOpacity
      onPress={Pressionamento}
      style={[
        DefaultStyles.Touch,
        { backgroundColor: fundo_buttom, height: altura },
      ]}
    >
      <Text style={{ color: colorText_buttom, fontSize: 18 }}>
        {Button_title}
      </Text>
    </TouchableOpacity>
  );
}
