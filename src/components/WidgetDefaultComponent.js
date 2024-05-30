import { View, Text } from "react-native";

//importando estilizações padroẽs da aplicação
import { widgetDefaultComponent } from "../styles/DefaultStyles";

//importando linear gradiente para estilizar
import { LinearGradient } from "expo-linear-gradient";
//importando components
import TextComponent from "./TextComponent";


export default function WidgetDefaultComponent({
  titleWidget,
  backgroundColor,
  data,
  RITMOEXERCICIO,
  ESFROÇO,
  TEMPO,
  KMPESO,
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
        flex: 20,
        flexDirection: 'row', 
        justifyContent: 'space-between',
      }]}
    >
    <View
      style={[
        widgetDefaultComponent.widgetContent,{flex:10}
        
      ]}
    > 

  
      <View style={{flex:1, textAlign: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <View style={[widgetDefaultComponent.titleWidgetText,{flex:6}]}>
        <Text style={{textAlign: 'center', color: '#ffffff'}}>{titleWidget}</Text>
      </View>
      <View style={[widgetDefaultComponent.titleWidgetText,{flex: 6}]}>
        <Text style={{textAlign: 'center', color: '#ffffff'}}>{data}</Text>
      </View>
      </View>

      <View style={[widgetDefaultComponent.CaixaInfo,{flex:10}]}>
        <View style={{flexDirection: 'row', }}>
      <View style={[widgetDefaultComponent.infoView,{flex:1, flexDirection: 'column'}]}>
        <TextComponent styleText={widgetDefaultComponent.dataWidget} title={KMPESO}/>
      </View>
      <View style={[widgetDefaultComponent.infoView,{flex:1,flexDirection: 'column'}]}>
        <TextComponent styleText={widgetDefaultComponent.dataWidget} title={TEMPO}/>
      </View>
      </View>
        <View style={{flexDirection: 'row', }}>
      <View style={[widgetDefaultComponent.infoView,{flex:1,flexDirection: 'column'}]}>
        <TextComponent styleText={widgetDefaultComponent.dataWidget} title={ESFROÇO}/>
      </View>
      <View style={[widgetDefaultComponent.infoView,{flex:1,flexDirection: 'column'}]}>
        <TextComponent styleText={widgetDefaultComponent.dataWidget} title={RITMOEXERCICIO}/>
      </View>
        </View>
      </View>
     
    </View>
    </LinearGradient>
   
  );
}
