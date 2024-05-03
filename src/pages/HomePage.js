import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";
//importando componentes estruturais de nossa aplicação
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import WidgetDefaultComponent from "../components/WidgetDefaultComponent";
import WidgetIMC_Component from "../components/WidgetIMC_Component";
import WidgetMusculacao_Component from "../components/WidgetMusculacao_Component";
import ModalComponent from "../components/ModalComponent";
import IMC_Content from "../components/HomeComponents/IMC_Content";

//importando hooks
import { useState, useEffect } from "react";
//importando async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RefreshControl } from "react-native";
import Cadastro_content from "../components/HomeComponents/Cadastro_content";
import UserHome_Component from "../components/HomeComponents/UserHome_Component";

//titleWidget,backgroundColor,data,RITMOEXERCICIO,ESFROÇO,TEMPO,KMPESO, -> PROPS DOS WIDGETS
export default function HomePage() {
  const data = "10/05/2024";
  const [boleana, setBoleana] = useState(false);
  const [imc, setImc] = useState("");
  const [desc, setDesc] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [nome, setNome] = useState("");

  useEffect(() => {}, [Search()]);

  function closeModal() {
    setBoleana(false);
    Search();
    onRefresh();
  }
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
  return (
    <View style={DefaultStyles.container}>
      <HeaderComponent />
      <View style={[DefaultStyles.content, { width: "100%" }]}>
        {nome === "" ? (
          <Cadastro_content />
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
