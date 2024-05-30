
import { View, Text } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles, widgetDefaultComponent } from "../styles/DefaultStyles";

//importando linear gradiente para estilizar
import { LinearGradient } from "expo-linear-gradient";
//importando components
import TextComponent from "./TextComponent";
import IconComponent from "./IconComponent";


export default function WidgetRUNNING_EXAMPLE({
 
  corDegrade1,
  corDegrade2,
  titleCenter,
  descriçaoCenter,

}) {

  
  return (
  <LinearGradient
      colors={[corDegrade1, corDegrade2 ]} 
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }} 
      locations={[0.34, 0.75]}
      style={[ widgetDefaultComponent.widgetContent,{
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-between',
      }]}
    >
    <View
      style={[
        widgetDefaultComponent.widgetContent,{flex:2}
        
      ]}
    > 
    <View style={[{flex: 1}]}>
    <TextComponent styleText={[widgetDefaultComponent.dataWidget,{}]} title={titleCenter}/>
    <TextComponent styleText={[widgetDefaultComponent.dataWidget,{fontSize:20}]} title={descriçaoCenter}/>
    </View>
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 5}}>
        <View  style={[DefaultStyles.Icon,{height: 40, width: 40}]}>
        <IconComponent
        archive={require("../assets/run.png")}
        style={[DefaultStyles.Icon,{height: 40, width: 40}]}
        />
        </View>
    </View>
  
      
    </View>
    </LinearGradient>
   
  );
}
