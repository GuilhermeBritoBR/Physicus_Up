import { View, Text, ScrollView, TouchableOpacity } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";
//importando componentes estruturais de nossa aplicação
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import WidgetDefaultComponent from "../components/WidgetDefaultComponent";
import WidgetIMC_Component from "../components/WidgetIMC_Component";
import WidgetMusculacao_Component from "../components/WidgetMusculacao_Component";

//titleWidget,backgroundColor,data,RITMOEXERCICIO,ESFROÇO,TEMPO,KMPESO, -> PROPS DOS WIDGETS
export default function HomePage() {
  const data = "10/05/2024";
  return (
    <View style={DefaultStyles.container}>
      <HeaderComponent />
      <View style={DefaultStyles.content}>
        <ScrollView>
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
            
            <View>
              
            </View>

          </TouchableOpacity>
          <TouchableOpacity>
            <WidgetIMC_Component
              titleCenter={"IMC"}
              corDegrade1={"#B3B3B3"}
              corDegrade2={"#535353"}
              descriçaoCenter={"Preencha os dados"}
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
        </ScrollView>
      </View>
      <FooterComponent />
    </View>
  );
}
