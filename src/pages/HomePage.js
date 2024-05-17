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

//titleWidget,backgroundColor,data,RITMOEXERCICIO,ESFROÇO,TEMPO,KMPESO, -> PROPS DOS WIDGETS
export default function HomePage() {
  const data = "10/05/2024";
  //modal states
  const [boleana, setBoleana] = useState(false);
  //imc local states
  const [imc, setImc] = useState("");
  const [desc, setDesc] = useState("");
  //refresh states
  const [refresh, setRefresh] = useState(false);
  //userdataBase states
  const [dados, setDados] = useState({});
  const [sexo, setSexo] = useState("");
  const [idade, setIdade] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  function closeModal() {
    setBoleana(false);
    Search();
    onRefresh();
  }
  //pega a url do servidor para atualizar os dados
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////API DO JSON////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  useEffect(() => {
    // Função para carregar os dados ao iniciar o aplicativo
    carregarDados();
    Search();
  }, []);

  const carregarDados = async () => {
    try {
      const response = await axios.get("http://localhost:3000/dados");
      setDados(response.data);
      const nome = dados.nome;
      console.log("ESTOUAQUI", dados.nome);
      await AsyncStorage.setItem("Username", nome);
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    }
  };
  const atualizarDados = async () => {
    try {
      await axios.post("http://localhost:3000/usuario", {
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
  ///////////////////////////////////////////////
  ////////////////////localSTORAGE///////////////////////////
  ///////////////////////////////////////////////

  async function Search() {
    setImc(await AsyncStorage.getItem("Imc_user"));
    setDesc(await AsyncStorage.getItem("Imc_situation"));
  }
  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  }, []);

  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////

  return (
    <View style={DefaultStyles.container}>
      <HeaderComponent
        titleHeaderPropiedade={
          dados.nome === "" ? "Physicus Up" : `Bem vindo, ${dados.nome}`
        }
      />
      <View style={[DefaultStyles.content, { width: "100%" }]}>
        {dados.nome === "" ? (
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
        ) : (
          <UserHome_Component
            vidro={boleana}
            imc={imc}
            desc={desc}
            refresh={refresh}
            onRefresh={onRefresh}
            data={data}
            xDoModal={closeModal}
            funçao={() => setBoleana(true)}
          />
        )}
      </View>
      <FooterComponent />
    </View>
  );
}
