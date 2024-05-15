import { ScrollView, Text, View } from "react-native";
import { DefaultStyles } from "../styles/DefaultStyles";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import BlockDefaultComponent from "../components/AnalyticsPage/BlockDefaultComponent";

export default function AnalyticsPage() {
  return (
    <View style={DefaultStyles.container}>
      <HeaderComponent />
      <View style={[DefaultStyles.content, { flex: 3 }]}>
        <ScrollView>
          <BlockDefaultComponent
            titleCenter={"oi"}
            corDegrade1={"#00B3B3B3"}
            corDegrade2={"#00B3B3B3"}
          />
        </ScrollView>
      </View>
      <FooterComponent />
    </View>
  );
}
