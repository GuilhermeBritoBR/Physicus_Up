import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { RefreshControl, View } from "react-native";
import axios from "axios";
//importando
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

export default function UserHome_Component({
  imc,
  desc,
  vidro,
  refresh,
  onRefresh,
  data,
  xDoModal,
  funçao,
}) 
{
  const focus = useIsFocused();
  const navigation = useNavigation("");
  const [widgetRun, setWidgetRun] = useState([]);
  const [loading,setLoading] = useState(false);
  const [testeState, setTesteState] = useState("");
  //academy
  const [widgetAcademy, setWidgetAcademy] = useState([]);
  const [testeStateAcademy, setTesteStateAcademy] = useState("");

  useEffect(() => {
    LoadData();
                
  }, [ focus  ]);

  async function LoadData(){
    try{
      const response = await axios.get(`http://${ip}:3000/physicusup/meustreinos`);
      const responseAcademy = await axios.get(`http://${ip}:3000/physicusup/meustreinosAcademy`);
      setWidgetAcademy(responseAcademy.data);
      setWidgetRun(response.data);
      console.log(response.data)
      setTesteState(widgetRun.name);
      setTesteStateAcademy(widgetAcademy.name);
      testing()
    }catch(error){
      console.log(`Erro ao carregar treino: ${error}`)
    }
  }

  function testing(){
    
    console.log(widgetRun[widgetRun.length - 1]);
  }
  
  if (loading) {
    return (
        <View style={DefaultStyles.container}>
            <Text style={{color: 'white', fontSize: 18}}>Carregando...</Text>
        </View>
    );
}
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh}>{onRefresh}</RefreshControl>
      }
    >
     
        {
          (testeState === "") ? (
            <TouchableOpacity onPress={()=> navigation.navigate("RunningPage")}>
            <WidgetRUNNING_EXAMPLE
          titleCenter={"COMECE A CORRER!"}
          corDegrade1={"#1db954"}
          corDegrade2={"#309f57"}
          descriçaoCenter={"CLIQUE AQUI!"}
        />
        </TouchableOpacity>
     
          ):(
            <>
        <WidgetDefaultComponent
          titleWidget={widgetRun[widgetRun.length - 1].name}
          data={widgetRun[widgetRun.length - 1].date}
          RITMOEXERCICIO={widgetRun[widgetRun.length - 1].pace}
          TEMPO={widgetRun[widgetRun.length - 1].timeString}
          KMPESO={`${widgetRun[widgetRun.length - 1].distance} KM`}
          ESFROÇO={widgetRun[widgetRun.length - 1].level}
          corDegrade1={"#1db954"}
          corDegrade2={"#309f57"}
        />
        </>
         )}
        
      
      <TouchableOpacity onPress={funçao}>
        <WidgetIMC_Component
          titleCenter={imc}
          corDegrade1={"#B3B3B3"}
          corDegrade2={"#535353"}
          descriçaoCenter={desc}
        />
      </TouchableOpacity>
      { (testeStateAcademy ==="")? (
         <TouchableOpacity onPress={()=> navigation.navigate("MusculationPage")}>
        <WidgetACADEMIA_EXAMPLE titleCenter={"COMECE A TREINAR MUSCULAÇÃO!"}
        descriçaoCenter={"CLIQUE AQUI!"}
        corDegrade1={"#fdb573"}
        corDegrade2={"#d86800"}/>
        </TouchableOpacity>
      ):
      (
        <WidgetMusculacao_Component
          titleWidget={widgetAcademy[widgetAcademy.length - 1].name}
          data={widgetAcademy[widgetAcademy.length - 1].date}
          RITMOEXERCICIO={widgetAcademy[widgetAcademy.length - 1].train}
          TEMPO={widgetAcademy[widgetAcademy.length - 1].time}
          KMPESO={`${widgetAcademy[widgetAcademy.length - 1].series} Series`}
          ESFROÇO={widgetAcademy[widgetAcademy.length - 1].level}
        />
      )
      }
     
      <ModalComponent vidro={vidro} open={vidro}>
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
