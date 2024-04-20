import { View, Text } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";
import { Footer } from "../styles/Footer";
import IconComponent from "./IconComponent";

export default function FooterComponent() {
  return (
    <View style={[DefaultStyles.Header,]}>
      <View style={[Footer.iconHomeView,{flex:1}]}>
          <IconComponent
          style={DefaultStyles.Icon}
          archive={require("../assets/home.png")}/>
      </View>
      <View style={[Footer.iconHomeView,{flex:1}]}>
          <IconComponent
          style={DefaultStyles.Icon}
          archive={require("../assets/search.png")}/>
      </View>
      <View style={[Footer.iconHomeView,{flex:1}]}>
          <IconComponent
          style={[DefaultStyles.Icon,{width: 25, height: 20}]}
          archive={require("../assets/arrow.png")}/>
      </View>
    </View>
  );
}
