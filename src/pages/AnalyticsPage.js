import { Text, View } from "react-native";
import { DefaultStyles } from "../styles/DefaultStyles";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

export default function AnalyticsPage() {
  return (
    <View style={DefaultStyles.container}>
      <HeaderComponent />

      <FooterComponent />
    </View>
  );
}
