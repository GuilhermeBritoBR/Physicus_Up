import { View, Text } from "react-native";

//importando estilizações padroẽs da aplicação
import { widgetDefaultComponent } from "../styles/DefaultStyles";

//importando linear gradiente para estilizar
import { LinearGradient } from "expo-linear-gradient";

export default function WidgetDefaultComponent({
  titleWidget,
  backgroundColor,
  data,
}) {
  return (
    <View
      style={[
        widgetDefaultComponent.widgetContent,
        { backgroundColor: backgroundColor },
      ]}
    >
      <View style={widgetDefaultComponent.titleWidgetView}>
        <Text style={widgetDefaultComponent.titleWidgetText}>
          {titleWidget}
        </Text>
      </View>
      <View style={widgetDefaultComponent.dataWidget}>
        <Text>{data}</Text>
      </View>
    </View>
  );
}
