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
import { useNavigation } from "@react-navigation/native";
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
  const [widgetRun, setWidgetRun] = useState([]);
  const [loading,setLoading] = useState(false);
  const [testeState, setTesteState] = useState("");
  //academy
  const [widgetAcademy, setWidgetAcademy] = useState([]);
  const [testeStateAcademy, setTesteStateAcademy] = useState("");

  const navigation = useNavigation("");
  useEffect(() => {
    axios.get(`http://${ip}:3000/physicusup/meustreinos`)
                    .then(response => {
                        setWidgetRun(response.data);
                        setLoading(false);
                        setTesteState(widgetRun[0].name);
                    }
                        
            )
                    .catch(error => {
                        console.error(error);
                        setLoading(false);
                    });
                  axios.get(`http://${ip}:3000/physicusup/meustreinosAcademy`)
                    .then(response => {
                        setWidgetAcademy(response.data);
                        setLoading(false);
                        setTesteStateAcademy(widgetAcademy[0].name);
                    }
                        
            )
                    .catch(error => {
                        console.error(error);
                        setLoading(false);
                    });
  }, [widgetRun, widgetAcademy]);
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
 
        <WidgetDefaultComponent
          titleWidget={widgetRun[0].name}
          data={widgetRun[0].date}
          RITMOEXERCICIO={widgetRun[0].pace}
          TEMPO={widgetRun[0].timeString}
          KMPESO={`${widgetRun[0].distance} KM`}
          ESFROÇO={widgetRun[0].level}
          corDegrade1={"#1db954"}
          corDegrade2={"#309f57"}
        />
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
          titleWidget={widgetAcademy[0].name}
          data={widgetAcademy[0].date}
          RITMOEXERCICIO={widgetAcademy[0].train}
          TEMPO={widgetAcademy[0].time}
          KMPESO={widgetAcademy[0].series}
          ESFROÇO={widgetAcademy[0].level}
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
