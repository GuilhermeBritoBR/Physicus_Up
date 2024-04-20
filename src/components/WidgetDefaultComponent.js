import { View, Text } from "react-native";

//importando estilizações padroẽs da aplicação
import { widgetDefaultComponent } from "../styles/DefaultStyles";

//importando linear gradiente para estilizar

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
  cor1,
  cor2,

}) {

  
  return (
    
    <View
      style={[
        widgetDefaultComponent.widgetContent,
        { backgroundColor: backgroundColor },
      ]}
    > 
  
      <View style={{flex:0.2, textAlign: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <View style={[widgetDefaultComponent.titleWidgetText,{flex:1.2}]}>
        <Text style={{textAlign: 'center'}}>{titleWidget}</Text>
      </View>
      <View style={[widgetDefaultComponent.titleWidgetText,{flex: 1}]}>
        <Text style={{textAlign: 'center'}}>{data}</Text>
      </View>
      </View>

      <View style={[widgetDefaultComponent.CaixaInfo]}>
        <View style={{flexDirection: 'row'}}>
      <View style={[widgetDefaultComponent.infoView,{flex:1, flexDirection: 'column'}]}>
        <TextComponent styleText={widgetDefaultComponent.dataWidget} title={KMPESO}/>
      </View>
      <View style={[widgetDefaultComponent.infoView,{flex:1,flexDirection: 'column'}]}>
        <TextComponent styleText={widgetDefaultComponent.dataWidget} title={TEMPO}/>
      </View>
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
      <View style={[widgetDefaultComponent.infoView,{flex:1,flexDirection: 'column'}]}>
        <TextComponent styleText={widgetDefaultComponent.dataWidget} title={ESFROÇO}/>
      </View>
      <View style={[widgetDefaultComponent.infoView,{flex:1,flexDirection: 'column'}]}>
        <TextComponent styleText={widgetDefaultComponent.dataWidget} title={RITMOEXERCICIO}/>
      </View>
      </View>
      </View>
     
    </View>
   
  );
}
