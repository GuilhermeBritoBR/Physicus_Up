import { ScrollView, Text, View, TouchableOpacity, FlatList } from "react-native";
import { DefaultStyles } from "../styles/DefaultStyles";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import BlockDefaultComponent from "../components/AnalyticsPage/BlockDefaultComponent";
import SearchFunction from "../scripts/SearchFunction";

export default function AnalyticsPage() {
  
  SearchFunction()
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
        <ScrollView horizontal={true}>
          
          <TouchableOpacity>
          <BlockDefaultComponent
            titleBlock={"Evolução de tempo"}
            corDegrade1={"#b3b3b3"}
            corDegrade2={"#666666"}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <BlockDefaultComponent
            titleBlock={"Evolução de peso"}
            corDegrade1={"#b3b3b3"}
            corDegrade2={"#666666"}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <BlockDefaultComponent
            titleBlock={"Evolução de carga"}
            corDegrade1={"#b3b3b3"}
            corDegrade2={"#666666"}
          />
          </TouchableOpacity>
       
       
       
        </ScrollView>
        <ScrollView horizontal={true}>
          
          <TouchableOpacity>
          <BlockDefaultComponent
            titleBlock={"Evolução de Tempo"}
            corDegrade1={"#b3b3b3"}
            corDegrade2={"#666666"}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <BlockDefaultComponent
            titleBlock={"Evolução de Ritmo"}
            corDegrade1={"#b3b3b3"}
            corDegrade2={"#666666"}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <BlockDefaultComponent
            titleBlock={"Evolução de felicidade"}
            corDegrade1={"#b3b3b3"}
            corDegrade2={"#666666"}
          />
          </TouchableOpacity>
        </ScrollView>
        
      </View>
      <FooterComponent />
    </View>
  );
}
