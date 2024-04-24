import { ScrollView, Text, View } from "react-native";
import { DefaultStyles } from "../styles/DefaultStyles";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import BlockDefaultComponent from "../components/AnalyticsPage/BlockDefaultComponent";

export default function AnalyticsPage() {
  return (
    <View style={DefaultStyles.container}>
      <HeaderComponent />
      <View style={DefaultStyles.content}>
        <ScrollView>
          <BlockDefaultComponent
            titleCenter={"Desempenho"}
            corDegrade1={"#000000"}
            corDegrade2={"#000000"}
          />
        </ScrollView>
      </View>
      <FooterComponent />
    </View>
  );
}
