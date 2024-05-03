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

  const calc_imc = () => {
    const calcImc = (peso / ((altura / 100) * (altura / 100))).toFixed(2);

    if (calcImc < 18.5) {
      setImc(calcImc);
      setSituation("Abaixo do peso.");
    } else if (calcImc >= 18.5 && calcImc < 24.9) {
      setImc(calcImc);
      setSituation("Peso normal.");
    } else if (calcImc >= 25 && calcImc < 29.9) {
      setImc(calcImc);
      setSituation("Sobrepeso.");
    } else if (calcImc >= 30 && calcImc < 34.9) {
      setImc(calcImc);
      setSituation("Obesidade grau I.");
    } else if (calcImc >= 35 && calcImc < 39.9) {
      setImc(calcImc);
      setSituation("Obesdade grau II.");
    } else {
      setImc(calcImc);
      setSituation("Obesidade grau III.");
    }
  };
  async function SaveData() {
    await AsyncStorage.setItem("Imc_user", imc);
    await AsyncStorage.setItem("Imc_situation", situation);
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
        Pressionamento={calc_imc}
        Button_title={"Calcular"}
      />
      <Button_Component
        fundo_buttom={"#1db954"}
        colorText_buttom={"#ffffff"}
        Pressionamento={SaveData}
        Button_title={"Salvar"}
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
