import { View, Text } from "react-native";
import Input_box_Component from "../Input_Box_Component";
import { Picker } from "@react-native-picker/picker";

//importando hook
import { useState } from "react";
import Button_Component from "../Button_Component";
export default function Cadastro_content({
  valueName,
  valueSexo,
  valueIdade,
  valueSobrenome,
  onChangeIdade,
  onChangeName,
  onChangeSobrenome,
  onChangeSexo,
  onPress,
}) {
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
        onChangeText_propiedade={onChangeName}
        valueTextInput={valueName}
        horizonte={312}
                altura={56}
      />
      <Input_box_Component
        placeholder_propiedade={"Seu sobrenome.."}
        onChangeText_propiedade={onChangeSobrenome}
        horizonte={312}

                altura={56}
        valueTextInput={valueSobrenome}
      />
      <Input_box_Component
        placeholder_propiedade={"Sua idade.."}
        teclado={"numeric"}
        onChangeText_propiedade={onChangeIdade}
                        altura={56}
                        horizonte={312}
                
        valueTextInput={valueIdade}
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
          height: 56,
          width: 312,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Picker
          selectedValue={valueSexo}
          style={{
            width: 312,
            height: 35,
            backgroundColor: "white",
            borderRadius: 15,
            borderColor: "#000000",
            border: "solid",
            borderWidth: 1,
            margin: 0,
          }}
          onValueChange={(item) => onChangeSexo(item)}
        >
          <Picker.Item label="Seu Sexo.." value="" />

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
        Pressionamento={onPress}
        altura={56}
      />
    </View>
  );
}
