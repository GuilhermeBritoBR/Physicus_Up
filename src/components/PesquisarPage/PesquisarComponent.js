import { StyleSheet, Text, View } from "react-native";

export default function PesquisarComponent({ props_Text_Component }) {
  return (
    <View style={styles.PC}>
      <Text style={{color: '#ffffff'}}>{props_Text_Component}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  PC: {
    backgroundColor: "#535353",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1,
    width: "100%",
    height: 64,
  },
});