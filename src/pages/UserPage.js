import { Text, View } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";
//importando componentes estruturais de nossa aplicação
import FooterComponent from "../components/FooterComponent";
import IconComponent from "../components/IconComponent";
import HeaderComponent from "../components/HeaderComponent";
import UserPageContent from "../components/UserPageComponents/UserPageContent";


export default function UserPage() {
  return (
    <View style={DefaultStyles.container}>
      <HeaderComponent />
      <UserPageContent />
      <FooterComponent />
    </View>
  );
}
