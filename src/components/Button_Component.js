import { TouchableOpacity, Text } from "react-native";
export default function Button_Component({ Button_title, color_button, Pressionamento }) {
  return (
    <TouchableOpacity
    onPress={Pressionamento}
      style={{
        height: 48,
        width: 120,
        color: color_button,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        border: "solid",
        borderWidth: 1,
        borderColor: "#000000cc",
        borderRadius: 15,
      }}
    >
      <Text style={{ color: "#ffffff" }}>{Button_title}</Text>
    </TouchableOpacity>
  );
}
