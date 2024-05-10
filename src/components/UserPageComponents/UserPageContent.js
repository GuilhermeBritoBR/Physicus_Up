import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//css
import { DefaultStyles } from "../../styles/DefaultStyles";
import { UserPage } from "../../styles/UserPage";
//components
import IconComponent from "../IconComponent";
//importando HOOKS
import React, { useEffect, useState } from "react";
//importando AXIOS
import axios from "axios";
//async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function UserPageContent() {
  const [dados, setDados] = useState({});
  const [imc, setImc] = useState("");
  const [situation, setSituation] = useState("");
  useEffect(() => {
    take_info();
  }, []);
  async function take_info() {
    setImc(await AsyncStorage.getItem("Imc_user"));
    setSituation(await AsyncStorage.getItem("Imc_situation"));
    try {
      const response = await axios.get("http://localhost:3000/dados");
      setDados(response.data);
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    }
  }
  return (
    <View style={[DefaultStyles.content, { width: "100%" }]}>
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
        <View
          style={[
            UserPage.box_icon,
            {
              justifyContent: "center",
              alignItems: "center",
              margin: 20,
              flexDirection: "column",
            },
          ]}
        >
          <Image source={require("../../../assets/favicon.png")} />

          <Text style={{ fontSize: 28, color: "white" }}>
            {dados.nome}
            {" " + dados.sobrenome}
          </Text>
        </View>

        <View style={UserPage.container}>
          <Text style={{ fontSize: 24, color: "white" }}>
            {`Idade: ${dados.idade}`}
          </Text>
          <Text style={{ fontSize: 24, color: "white" }}>{`IMC: ${imc}`}</Text>
          <Text
            style={{ fontSize: 24, color: "white" }}
          >{`Situação: ${situation}`}</Text>

          <Text
            style={{ fontSize: 24, color: "white" }}
          >{`Sexo: ${dados.sexo}`}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}
