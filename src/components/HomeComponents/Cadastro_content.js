import { View, Text } from "react-native";
import Input_box_Component from "../Input_Box_Component";
import { Picker } from "@react-native-picker/picker";

//importando hook
import { useState } from "react";
import Button_Component from "../Button_Component";
export default function Cadastro_content() {
  const [sexo, setSexo] = useState("Sexo");
  const [idade, setIdade] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  function saveUserData() {
    console.log(sexo, idade, nome, sobrenome);
  }
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#ffffff", fontSize: 32 }}>Cadastro</Text>
      <Input_box_Component
        placeholder_propiedade={"Seu nome.."}
        onChangeText_propiedade={setNome}
      />
      <Input_box_Component
        placeholder_propiedade={"Seu sobrenome.."}
        onChangeText_propiedade={setSobrenome}
      />
      <Input_box_Component
        placeholder_propiedade={"Sua idade.."}
        teclado={"numeric"}
        onChangeText_propiedade={setIdade}
      />
      <View
        style={{
          overflow: "hidden",
          borderRadius: 15,
          border: "solid",
          borderWidth: 1,
          borderColor: "#ffffff",
          backgroundColor: "white",
          margin: 10,
          height: 48,
        }}
      >
        <Picker
          selectedValue={sexo}
          style={{
            width: 120,
            height: 48,
            backgroundColor: "white",
            borderRadius: 15,
            borderColor: "#000000",
            border: "solid",
            borderWidth: 1,
            margin: 0,
          }}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          <Picker.Item
            style={{ fontSize: 16 }}
            label="Masculino"
            value="Masculino"
          />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
      </View>
      <Button_Component
        Button_title={"Cadastrar"}
        fundo_buttom={"#1db954"}
        colorText_buttom={"#ffffff"}
        Pressionamento={saveUserData}
      />
    </View>
  );
}
