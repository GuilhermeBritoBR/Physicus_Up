import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
//Componente props das camadas
export default function PesquisarComponent({ props_Text_Component, On_press }) {
  return (
    <TouchableOpacity style={styles.PC} onPress={On_press}>
      <View style={[styles.PC]}>
        <Text style={{ color: "#ffffff" }}>{props_Text_Component}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  PC: {
    flexDirection: "row",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1,
    width: "100%",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    height: 64,
  },
});
