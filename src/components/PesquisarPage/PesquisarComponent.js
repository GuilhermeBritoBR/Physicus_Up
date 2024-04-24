import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
//Componente props das camadas
export default function PesquisarComponent({ props_Text_Component, On_press }) {
  return (
    <TouchableOpacity style={styles.PC} onPress={On_press}>
      <Text style={{ color: "#ffffff" }}>{props_Text_Component}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  PC: {
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1,
    width: "100%",
    height: 64,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});
