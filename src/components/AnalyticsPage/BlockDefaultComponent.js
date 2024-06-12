import { View, Text } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../../styles/DefaultStyles";
import { widgetDefaultComponent } from "../../styles/DefaultStyles";
//importando linear gradiente para estilizar
import { LinearGradient } from "expo-linear-gradient";
//importando components
import TextComponent from "../TextComponent";
{
  /*import IconComponent from "./IconComponent";*/
}

export default function BlockDefaultComponent({
  corDegrade1,
  corDegrade2,
  p1,
  p2,
  p3,
  p4,
}) {
  return (
    <LinearGradient
      colors={[corDegrade1, corDegrade2]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      locations={[0.34, 0.75]}
      style={[
        widgetDefaultComponent.widgetContent,
        {
          flexDirection: "row",
          justifyContent: "space-between",
        },
      ]}
    >
      <View style={[widgetDefaultComponent.widgetContent, { flex: 2 }]}>
        <View style={[{ flex: 1 }]}>
          <TextComponent
            styleText={[widgetDefaultComponent.dataWidget, {}]}
            title={p1} //parágrafo 1
          />
          <TextComponent
            styleText={[widgetDefaultComponent.dataWidget, {}]}
            title={p2} //parágrafo 2
          />
          <TextComponent
            styleText={[widgetDefaultComponent.dataWidget, {}]}
            title={p3} //parágrafo 3
          />
          <TextComponent
            styleText={[widgetDefaultComponent.dataWidget, { fontSize: 20 }]}
            title={p4} //parágrafo 4
          />
        </View>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 5 }}
        >
          <View style={[DefaultStyles.Icon, { height: 40, width: 40 }]}></View>
        </View>
      </View>
    </LinearGradient>
  );
}
