import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//importantdo HOOKS
import { useState } from "react";
//Importando Styles
import { DefaultStyles } from "../styles/DefaultStyles";

//importando components
import Input_box_Component from "../components/Input_Box_Component";
import Button_Component from "../components/Button_Component";
import TextComponent from "../components/TextComponent";

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
    } else if (calcImc >= 18.5 && calcImc < 24.99) {
      setImc(calcImc);
      setSituation("Peso normal.");
    } else if (calcImc >= 25 && calcImc < 29.99) {
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
          flex: 1,
          width: "100%",
          border: "solid",
          borderWidth: 1,
          borderRadius: 15,
          borderColor: "#000000cc",
        },
      ]}
    >
      <LinearGradient
        colors={["#000000", "#535353"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 1]}
        style={[
          {
            flex: 3,
            width: "100%",
            borderWidth: 1,
            borderColor: "black",
            border: "solid",
            borderRadius: 15,
            backgroundColor: "#000000",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <View>
          <TextComponent
            title={"IMC"}
            styleText={[DefaultStyles.Text, { color: "#ffffff", fontSize: 28 }]}
          />
        </View>
        <Input_box_Component
          onChangeText_propiedade={setAltura}
          placeholder_propiedade={"Nome:.."}
          teclado={"numeric"}
          altura={56}
          horizonte={180}
        />
        <Input_box_Component
          onChangeText_propiedade={setPeso}
          placeholder_propiedade={"Idade:.."}
          teclado={"numeric"}
          altura={56}
          horizonte={180}
        />
        <Input_box_Component
          onChangeText_propiedade={setPeso}
          placeholder_propiedade={"Sexo:.."}
          teclado={"numeric"}
          altura={56}
          horizonte={180}
        />
        <Text style={{ color: "white", fontSize: 20 }}>{imc}</Text>
        <Text style={{ color: "white", fontSize: 20 }}>{situation}</Text>

        <Button_Component
          fundo_buttom={"#1db954"}
          colorText_buttom={"#ffffff"}
          Pressionamento={SaveData}
          Button_title={"Salvar"}
          altura={56}
        />
        <Button_Component
          Pressionamento={xDoModal}
          Button_title={"Fechar"}
          colorText_buttom={"#ffffff"}
          fundo_buttom={"#000000"}
          altura={56}
        />
      </LinearGradient>
    </View>
  );
}
