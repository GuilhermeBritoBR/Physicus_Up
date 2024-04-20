import { View } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";
import { Header } from "../styles/Header";

//importando componentes
import IconComponent from "./IconComponent";
import TextComponent from "./TextComponent";

export default function HeaderComponent() {
  return (
    <View style={[DefaultStyles.Header,{width: '100%', flex: 0.4,}]}>
      <View style={[Header.IconPather,{flex:0.9, justifyContent: 'center'}]}>
        <IconComponent
        style={[DefaultStyles.Icon]}
        archive={require("../assets/user.png")}
        />
      </View>
      <View style={[Header.TitleHeader,{flex: 1.2,}]}>
        <TextComponent 
        title={"Physicus Up"}
        styleText={[DefaultStyles.Text,{fontSize:24, textAlign: 'center', justifyContent: 'center',
        flexDirection: 'row', flex: 1}]}
        />
      </View>
      <View style={[Header.addView,{flex:0.9,}]}>
        <IconComponent
        archive={require("../assets/add.png")}
        style={[DefaultStyles.Icon,]}
        />
      </View>
    </View>
  );
}
