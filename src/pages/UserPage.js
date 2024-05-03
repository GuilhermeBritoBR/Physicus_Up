import {Text, View} from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";
//importando componentes estruturais de nossa aplicação
import FooterComponent from "../components/FooterComponent";
import IconComponent from "../components/IconComponent";
import HeaderComponent from "../components/HeaderComponent";

export default function UserPage() {
    return (
<View style={DefaultStyles.container}>
      <HeaderComponent />
      <View style={[DefaultStyles.content,{width: '100%'}]}>
    <View style={DefaultStyles.icon_name}>
        <IconComponent archive/>
        <Text style={{ fontSize: 20, color:'white'}}>name</Text>
        </View>
        
        <View style={DefaultStyles.informações}>
        <Text style={{ fontSize: 20, color:'white'}}>Informações</Text>
        <Text style={{ fontSize: 10, color:'white'}}>Idade</Text>
        <Text style={{ fontSize: 10, color:'white'}}>Imc</Text>
        <Text style={{ fontSize: 10, color:'white'}}>Sexo</Text>
        </View>
    </View>
<FooterComponent />
</View>
);
}