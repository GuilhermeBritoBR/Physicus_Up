import { TextInput } from "react-native";
import { DefaultStyles } from "../styles/DefaultStyles";
//É a caixa de texto(input)
export default function Little_Input_box_Component({
  placeholder_propiedade,
  onChangeText_propiedade,
  teclado,
  horizonte,
  valueTextInput,
  altura,
  margin
}) {
  return (
    <TextInput
      style={[DefaultStyles.Button, { width: horizonte, height: altura,margin:  margin, marginTop: 10 }]}
      placeholder={placeholder_propiedade}
      onChangeText={onChangeText_propiedade}
      keyboardType={teclado}
      value={valueTextInput}
    />
  );
}