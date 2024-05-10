import { TextInput } from "react-native";
import { DefaultStyles } from "../styles/DefaultStyles";
//É a caixa de texto(input)
export default function Input_box_Component({
  placeholder_propiedade,
  onChangeText_propiedade,
  teclado,
  horizonte,
  valueTextInput,
  altura,
}) {
  return (
    <TextInput
      style={[DefaultStyles.Button, { width: horizonte, height: altura }]}
      placeholder={placeholder_propiedade}
      onChangeText={onChangeText_propiedade}
      keyboardType={teclado}
      value={valueTextInput}
    />
  );
}
