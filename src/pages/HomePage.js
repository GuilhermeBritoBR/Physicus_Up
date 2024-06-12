import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";
//importando componentes estruturais de nossa aplicação
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

//importando hooks
import { useState, useEffect } from "react";
//importando async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import Cadastro_content from "../components/HomeComponents/Cadastro_content";
import UserHome_Component from "../components/HomeComponents/UserHome_Component";
//importando AXIOS
import axios from "axios";
import { ip } from "../scripts/ip";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

//titleWidget,backgroundColor,data,RITMOEXERCICIO,ESFROÇO,TEMPO,KMPESO, -> PROPS DOS WIDGETS
export default function HomePage() {
  const data = "10/05/2024";
  //modal states
  const [boleana, setBoleana] = useState(false);
  //imc local states
  const [imc, setImc] = useState("");
  const [desc, setDesc] = useState("");
  const focus = useIsFocused();
  //refresh states
  const [refresh, setRefresh] = useState(false);
  //userdataBase states
  const [widgetData, setWidgetData] = useState({});
  const [dados, setDados] = useState({});
  const [sexo, setSexo] = useState("");
  const [idade, setIdade] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [widgetRun, setWidgetRun] = useState(null);
  const [loading, setLoading] = useState(false);
  const [testeState, setTesteState] = useState("");
  //academy
  const [widgetAcademy, setWidgetAcademy] = useState([]);
  const [testeStateAcademy, setTesteStateAcademy] = useState("");

  function closeModal() {
    carregarDados();
    setBoleana(false);
  }

  useEffect(() => {
    // Função para carregar os dados ao iniciar o aplicativo
    if (focus) {
      carregarDados();
    }
  }, [focus]);

  const carregarDados = async () => {
    try {
      const response = await axios.get(`http://${ip}:3000/dados`);
      const getImc = await axios.get(`http://${ip}:3000/api/get_imc`);
      setDados(response.data);
      setWidgetData(getImc.data);
      setImc(getImc.data.imc);
      setDesc(getImc.data.situation);
      console.log(`${widgetData} do JSON e Nome do Usuário${dados.nome}`);
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    }
    console.log(`Dados do IMC: ${(imc, desc)}`);
  };
  function testing() {
    console.log(widgetData.imc);
    console.log(widgetData.situation);
  }
  const atualizarDados = async () => {
    try {
      await axios.post(`http://${ip}:3000/usuario`, {
        nome,
        sobrenome,
        idade,
        sexo,
      });
      // Recarregar os dados após a atualização
      carregarDados();
      alert("Dados atualizados com sucesso");
    } catch (error) {
      console.error("Erro ao atualizar os dados:", error);
      alert("Erro ao atualizar os dados");
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  }, []);
  //quando os dados do db estiverem vazios a tela de cadastro sera carregada, enquanto o oposto carregara a tela do feed
  //tudo isso monitorado pelo useEffect que carrega automaticamente os dados
  return (
    <View style={DefaultStyles.container}>
      <HeaderComponent />
      {dados.nome === "" ? (
        <View style={[DefaultStyles.content, { width: "100%" }]}>
          <Cadastro_content
            valueName={nome}
            valueIdade={idade}
            valueSexo={sexo}
            valueSobrenome={sobrenome}
            onChangeName={(text) => setNome(text)}
            onChangeIdade={(text) => setIdade(text)}
            onChangeSexo={setSexo}
            onChangeSobrenome={(valueSexo) => setSobrenome(valueSexo)}
            onPress={atualizarDados}
          />
        </View>
      ) : (
        <View style={DefaultStyles.container}>
          <View style={[DefaultStyles.content, { width: "100%" }]}>
            <UserHome_Component
              transparencia={boleana}
              imc={widgetData.imc === "" ? "IMC" : widgetData.imc}
              desc={
                widgetData.situation === ""
                  ? "Calcule seu IMC!"
                  : widgetData.situation
              }
              refresh={refresh}
              onRefresh={onRefresh}
              data={data}
              xDoModal={closeModal}
              funçao={() => setBoleana(true)}
            />
          </View>
          <FooterComponent />
        </View>
      )}
    </View>
  );
}
