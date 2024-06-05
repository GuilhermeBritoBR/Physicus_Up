import { ScrollView, Text, View, TouchableOpacity, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { DefaultStyles } from "../styles/DefaultStyles";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { ip } from "../scripts/ip";
import BlockDefaultComponent from "../components/AnalyticsPage/BlockDefaultComponent";
import SearchFunction from "../scripts/SearchFunction";
import axios from "axios";
import WidgetRUNNING_EXAMPLE from "../components/WidgetRUNNING_EXAMPLE";
import WidgetDefaultComponent from "../components/WidgetDefaultComponent";

//
export default function AnalyticsPage() {
  const [loading, setLoading] = useState(false);
  const [volume, setVolume] = useState(0);
  const [ media, setMedia] = useState(0);
  const [recorde, setRecorde] = useState({});
  const [ID, setID] = useState(0);
  const [recordeName, setRecordeName] = useState("");

  useEffect(() => {
    axios.get(`http://${ip}:3000/physicusup/volume-km`)
        .then(response => {
            setVolume(response.data.volume_km);
            console.log(volume);
            setLoading(false);
        }
            
  )
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
        axios.get(`http://${ip}:3000/physicusup/id-total`)
        .then(response => {
            setID(response.data.id_total);
            setLoading(false);
        }
            
  )
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
        axios.get(`http://${ip}:3000/physicusup/media`)
        .then(response => {
            setMedia(response.data.media);
            setLoading(false);
        }
      )
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
        axios.get(`http://${ip}:3000/api/get_recorde`)
        .then(response => {
            setRecorde(response.data);
            setRecordeName(recorde.name);
            setLoading(false);
        }
  )
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
  }, []);
  
  
  //texto para quando estiver carregando
  if (loading) {
  return (
    <View style={DefaultStyles.container}>
        <Text style={{color: 'white', fontSize: 18}}>Carregando...</Text>
    </View>
  );
  }
  return (
    <View style={DefaultStyles.container}>
      <HeaderComponent />
      <View
        style={[
          DefaultStyles.content,
          { flex: 3, backgroundColor: "rgba(0, 0, 0, 0.8)" },
        ]}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
            Estatisticas
          </Text>
        <ScrollView>
          
        

          <TouchableOpacity>
          <BlockDefaultComponent
          
            p1={`${volume} Quilômetros registrados!`}
            p2={`${ID} Corridas salvas!` }
            p3={`${media.toFixed(1)} KM em média por corrida!`}
            
          
            
            corDegrade1={"#b3b3b3"}
            corDegrade2={"#666666"}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          {
            (recordeName === "")? (
              <TouchableOpacity onPress={()=> navigation.navigate("RecordPage")}>
            <WidgetRUNNING_EXAMPLE
          titleCenter={"ADICIONE SEU RP NA CORRIDA!"}
          corDegrade1={"#1db954"}
          corDegrade2={"#309f57"}
          descriçaoCenter={"CLIQUE AQUI!"}
        />
        </TouchableOpacity>
            ):(
              <WidgetDefaultComponent
          ESFROÇO={recorde.name}
          TEMPO={recorde.tempo}
          RITMOEXERCICIO={recorde.ritmo}
          KMPESO={`${recorde.distancia} KM`}
          
          corDegrade1={"#1db954"}
          corDegrade2={"#309f57"}
        />
            )
          } 
          </TouchableOpacity>
       
       
       
        </ScrollView>
        
        
      </View>
      <FooterComponent />
    </View>
  );
}
