import { View, Text, TouchableOpacity } from "react-native";

//importantdo HOOKS
import { useState } from "react";
//Importando Styles
import { DefaultStyles } from "../../styles/DefaultStyles";

//importando components
import Input_box_Component from "../Input_Box_Component";
import Button_Component from "../Button_Component";
import TextComponent from "../TextComponent";

//Importando ASYNC STORAGE
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function IMC_Content({ xDoModal }) {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [situation, setSituation] = useState("");
  const [imc, setImc] = useState("");

  async function situacao() {
    if (peso === "" && altura === "") {
      console.log("error!");
      alert("Preencha os campos!");
    } else {
      setImc((peso / ((altura / 100) * (altura / 100))).toFixed(2));
      console.log(imc);
      if (imc > 0 && imc < 17) {
        setSituation("MUITO ABAIXO DO PESO");
      } else if (imc >= 17 && imc <= 18.99) {
        setSituation("ABAIXO DO PESO");
      } else if (imc >= 18.99 && imc <= 24.99) {
        setSituation("PESO NORMAL");
      } else if (imc >= 24.99 && imc <= 29.99) {
        setSituation("ACIMA DO PESO");
      } else if (imc >= 29.99 && imc <= 34.99) {
        setSituation("OBESIDADE GRAU I");
      } else if (imc >= 34.99 && imc <= 39.99) {
        setSituation("OBESIDADE GRAU II");
      } else if (imc >= 40) {
        setSituation("OBESIDADE GRAU III");
      }
      await AsyncStorage.setItem("Imc_user", imc);
      await AsyncStorage.setItem("Imc_situation", situation);
    }
  }

  return (
    <View
      style={[
        DefaultStyles.content,
        {
          flex: 0.6,
          width: "80%",
          border: "solid",
          borderWidth: 1,
          borderRadius: 15,
          borderColor: "#000000cc",
        },
      ]}
    >
      <View>
        <TextComponent
          title={"IMC"}
          styleText={[DefaultStyles.Text, { color: "#ffffff" }]}
        />
      </View>
      <Input_box_Component
        onChangeText_propiedade={setAltura}
        placeholder_propiedade={"Sua altura(CM).."}
        teclado={"numeric"}
      />
      <Input_box_Component
        onChangeText_propiedade={setPeso}
        placeholder_propiedade={"Seu peso(KG).."}
        teclado={"numeric"}
      />
      <Text style={{ color: "white" }}>{imc}</Text>
      <Text style={{ color: "white" }}>{situation}</Text>

      <Button_Component
        fundo_buttom={"#1db954"}
        colorText_buttom={"#ffffff"}
        Pressionamento={situacao}
        Button_title={"Calcular"}
      />
      <Button_Component
        Pressionamento={xDoModal}
        Button_title={"Fechar"}
        colorText_buttom={"#ffffff"}
        fundo_buttom={"#000000"}
      />
    </View>
  );
}
