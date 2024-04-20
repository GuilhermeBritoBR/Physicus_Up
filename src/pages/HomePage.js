import { View, Text, ScrollView } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";
//importando componentes estruturais de nossa aplicação
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import WidgetDefaultComponent from "../components/WidgetDefaultComponent";


//titleWidget,backgroundColor,data,RITMOEXERCICIO,ESFROÇO,TEMPO,KMPESO, -> PROPS DOS WIDGETS
export default function HomePage() {
  const data = "10/20/2024";
  return (
    <View style={DefaultStyles.container}>
      <HeaderComponent />
      <View style={DefaultStyles.content}>
        <ScrollView>
          <WidgetDefaultComponent
            backgroundColor="#1db954"
            titleWidget="Corrida no final da tarde"
            data={data}
            RITMOEXERCICIO={"ritmo"}
            TEMPO={"tempo"}
            KMPESO={"KM/PESO"}
            ESFROÇO={"ESFORÇO"}
           
          />
         
        </ScrollView>
      </View>
      <FooterComponent />
    </View>
  );
}
