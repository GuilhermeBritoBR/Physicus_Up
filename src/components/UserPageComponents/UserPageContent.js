import { View, Text } from "react-native";
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
import WidgetDefaultComponent from "../WidgetDefaultComponent";
import PesquisarComponent from "../SearchComponents/PesquisarComponent";
import FooterComponent from "../FooterComponent";
import { ip } from "../../scripts/ip";
export default function UserPageContent() {
  const [dados, setDados] = useState({});
  const [imc, setImc] = useState("");
  const [situation, setSituation] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [attsalva, setAttsave] = useState("");
  const [base, setBase]= useState("");
  useEffect(() => {
    take_info();
  }, [imc,situation]);
  async function take_info() {
    try {
      const response = await axios.get(`http://${ip}:3000/dados`);
      const imcresponse = await axios.get(`http://${ip}:3000/api/get_imc`);
      setBase(imcresponse.data);
      setDados(response.data);
      setImc(base.imc);
      setSituation(base.situation)
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    }
  }
  return (
        <View
          style={[
            UserPage.box_icon,
            {
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            },
          ]}
        >

          <Text style={{ fontSize: 28, color: "white" }}>
            {dados.nome}
            {" " + dados.sobrenome}
          </Text>
       

        <View style={{ flex: 1 }}>
         
          <PesquisarComponent props_Text_Component={`IMC: ${imc}`} />

          <PesquisarComponent props_Text_Component={`Situação: ${situation}`} />
          <PesquisarComponent props_Text_Component={`Sexo: ${dados.sexo}`} />
          <PesquisarComponent props_Text_Component={`Idade: ${dados.idade}`} />
          <PesquisarComponent props_Text_Component={`Modalidade: ${dados.modalidade}`} />
          <PesquisarComponent props_Text_Component={`Atividades salvas: ${dados.attsave}`} />
        </View>
        </View>
  );
}
