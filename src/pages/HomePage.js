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
import { useState } from "react";
import { useEffect } from "react";
//importando async storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RefreshControl } from "react-native";

//titleWidget,backgroundColor,data,RITMOEXERCICIO,ESFROÇO,TEMPO,KMPESO, -> PROPS DOS WIDGETS
export default function HomePage() {
  const data = "10/05/2024";
  const [boleana, setBoleana] = useState(false);
  const [imc, setImc] = useState("");
  const [desc, setDesc] = useState("");
  const [refresh, setRefresh] = useState(false);

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
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refresh}>{onRefresh}</RefreshControl>
          }
        >
          <TouchableOpacity>
            <WidgetDefaultComponent
              titleWidget="Corrida no final da tarde"
              data={data}
              RITMOEXERCICIO={"4'00 Min/km"}
              TEMPO={"20:00"}
              KMPESO={"5 KM"}
              ESFROÇO={"Esforço: 9"}
              corDegrade1={"#1db954"}
              corDegrade2={"#309f57"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setBoleana(true)}>
            <WidgetIMC_Component
              titleCenter={imc}
              corDegrade1={"#B3B3B3"}
              corDegrade2={"#535353"}
              descriçaoCenter={desc}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <WidgetMusculacao_Component
              titleWidget="Musculação no final da tarde"
              data={data}
              RITMOEXERCICIO={"Peito"}
              TEMPO={"01:00:00"}
              KMPESO={"Series: 8"}
              ESFROÇO={"Esforço: 8"}
              descriçaoCenter={"Preencha os dados"}
            />
          </TouchableOpacity>
          <ModalComponent vidro={boleana} open={boleana}>
            <View
              style={{
                width: "100%",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IMC_Content xDoModal={closeModal} />
            </View>
          </ModalComponent>
        </ScrollView>
      </View>
      <FooterComponent />
    </View>
  );
}
