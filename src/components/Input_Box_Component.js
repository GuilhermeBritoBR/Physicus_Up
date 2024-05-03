import { TextInput } from "react-native";
import { DefaultStyles } from "../styles/DefaultStyles";
//É a caixa de texto(input)
export default function Input_box_Component({
  placeholder_propiedade,
  onChangeText_propiedade,
  teclado,
  height,
}) {
  return (
    <TextInput
      style={[DefaultStyles.Button]}
      placeholder={placeholder_propiedade}
      onChangeText={onChangeText_propiedade}
      keyboardType={teclado}
    />
  );
}
