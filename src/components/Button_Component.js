import { TouchableOpacity, Text } from "react-native";
export default function Button_Component({ Button_title, fundo_buttom,colorText_buttom, Pressionamento }) {
  return (
    <TouchableOpacity
    onPress={Pressionamento}
      style={[{
        height: 48,
        width: 120,
        backgroundColor: fundo_buttom,
        justifyContent: "center",
        alignItems: "center",
        border: "solid",
        borderWidth: 1,
        borderColor: "#000000cc",
        borderRadius: 15,
        margin: 5,
      }]}
    >
      <Text style={{color: colorText_buttom}}>{Button_title}</Text>
    </TouchableOpacity>
  );
}
