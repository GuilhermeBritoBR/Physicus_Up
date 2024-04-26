import { TextInput } from "react-native";
//É a caixa de texto(input)
export default function Input_box_Component({
  placeholder_propiedade,
  onChangeText_propiedade,
}) {
  return (
    <TextInput
      style={[{
        height: 48,
        width: 120,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        margin: 10,
      }]}
      placeholder={placeholder_propiedade}
      onChangeText={ onChangeText_propiedade }
    />
  );
}
