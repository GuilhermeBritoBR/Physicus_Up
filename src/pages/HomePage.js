import { View, Text, ScrollView } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";
//importando componentes estruturais de nossa aplicação
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import WidgetDefaultComponent from "../components/WidgetDefaultComponent";

export default function HomePage() {
  return (
    <View style={DefaultStyles.container}>
      <HeaderComponent />
      <View style={DefaultStyles.content}>
        <ScrollView>
          <WidgetDefaultComponent
            backgroundColor="#1db954"
            titleWidget="Corrida no final da tarde"
            data={"Distância"}
          />
        </ScrollView>
      </View>
      <FooterComponent />
    </View>
  );
}
