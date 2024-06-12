import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { RefreshControl, View, Text } from "react-native";
import axios from "axios";
import WidgetDefaultComponent from "../WidgetDefaultComponent";
import WidgetIMC_Component from "../WidgetIMC_Component";
import WidgetMusculacao_Component from "../WidgetMusculacao_Component";
import ModalComponent from "../ModalComponent";
import IMC_Content from "./IMC_Content";
import WidgetRUNNING_EXAMPLE from "../WidgetRUNNING_EXAMPLE";
import { ip } from "../../scripts/ip";
import { useState, useEffect } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import WidgetACADEMIA_EXAMPLE from "../WidgetACADEMIA_EXAMPLE";
import { DefaultStyles } from "../../styles/DefaultStyles";

export default function UserHome_Component({
  imc,
  desc,
  transparencia,
  refresh,
  onRefresh,
  data,
  xDoModal,
  funçao,
}) {
  const focus = useIsFocused();
  const navigation = useNavigation();
  const [widgetRun, setWidgetRun] = useState([]);
  const [loading, setLoading] = useState(false);
  const [widgetAcademy, setWidgetAcademy] = useState([]);
  const [testeState, setTesteState] = useState("");
  const [testeStateAcademy, setTesteStateAcademy] = useState("");

  useEffect(() => {
    if (focus) {
      LoadData();
    }
  }, [focus]);

  useEffect(() => {
    if (widgetRun.length > 0) {
      setTesteState(widgetRun[widgetRun.length - 1].name || "");
    }
    if (widgetAcademy.length > 0) {
      setTesteStateAcademy(widgetAcademy[widgetAcademy.length - 1].name || "");
    }
  }, [widgetRun, widgetAcademy]);

  async function LoadData() {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://${ip}:3000/physicusup/meustreinos`
      );
      const responseAcademy = await axios.get(
        `http://${ip}:3000/physicusup/meustreinosAcademy`
      );
      setWidgetRun(response.data);
      setWidgetAcademy(responseAcademy.data);
      console.log("Treinos de corrida:", response.data);
      console.log("Treinos de academia:", responseAcademy.data);
      setLoading(false);
    } catch (error) {
      console.log(`Erro ao carregar treino: ${error}`);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={DefaultStyles.container}>
        <Text style={{ color: "white", fontSize: 18 }}>Carregando...</Text>
      </View>
    );
  }

  const lastRun = widgetRun.length > 0 ? widgetRun[widgetRun.length - 1] : null;
  const lastAcademy =
    widgetAcademy.length > 0 ? widgetAcademy[widgetAcademy.length - 1] : null;

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
    >
      {testeState === "" ? (
        <TouchableOpacity onPress={() => navigation.navigate("RunningPage")}>
          <WidgetRUNNING_EXAMPLE
            titleCenter={"COMECE A CORRER!"}
            corDegrade1={"#1db954"}
            corDegrade2={"#309f57"}
            descriçaoCenter={"CLIQUE AQUI!"}
          />
        </TouchableOpacity>
      ) : (
        lastRun && (
          <WidgetDefaultComponent
            titleWidget={lastRun.name}
            data={lastRun.date}
            RITMOEXERCICIO={lastRun.pace}
            TEMPO={lastRun.timeString}
            KMPESO={`${lastRun.distance} KM`}
            ESFROÇO={lastRun.level}
            corDegrade1={"#1db954"}
            corDegrade2={"#309f57"}
          />
        )
      )}

      <TouchableOpacity onPress={funçao}>
        <WidgetIMC_Component
          titleCenter={imc}
          corDegrade1={"#B3B3B3"}
          corDegrade2={"#535353"}
          descriçaoCenter={desc}
        />
      </TouchableOpacity>

      {testeStateAcademy === "" ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("MusculationPage")}
        >
          <WidgetACADEMIA_EXAMPLE
            titleCenter={"COMECE A TREINAR MUSCULAÇÃO!"}
            descriçaoCenter={"CLIQUE AQUI!"}
            corDegrade1={"#fdb573"}
            corDegrade2={"#d86800"}
          />
        </TouchableOpacity>
      ) : (
        lastAcademy && (
          <WidgetMusculacao_Component
            titleWidget={lastAcademy.name}
            data={lastAcademy.date}
            RITMOEXERCICIO={lastAcademy.train}
            TEMPO={lastAcademy.time}
            KMPESO={`${lastAcademy.series} Series`}
            ESFROÇO={lastAcademy.level}
          />
        )
      )}
      {/* tela para preencher imc */}
      <ModalComponent transparencia={transparencia} open={transparencia}>
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IMC_Content xDoModal={xDoModal} />
        </View>
      </ModalComponent>
    </ScrollView>
  );
}
