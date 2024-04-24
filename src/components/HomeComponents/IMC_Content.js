import { View } from "react-native";

//importantdo HOOKS
import { useState } from "react";
import TextComponent from "../TextComponent";
//Importando Styles
import { DefaultStyles } from "../../styles/DefaultStyles";

//importando components
import Input_box_Component from "../Input_Box_Component";
import Button_Component from "../Button_Component";

export default function IMC_Content() {
  const imc = useState();
  return (
    <View style={[DefaultStyles.content]}>
      <View>
        <TextComponent
          title={"IMC"}
          styleText={[DefaultStyles.Text, { color: "#ffffff" }]}
        />
      </View>
      <Input_box_Component placeholder_propiedade={"Sua altura.."} />
      <Input_box_Component placeholder_propiedade={"Seu peso(KG).."} />
      <Button_Component Button_title={"Calcular"} />
      <View></View>
    </View>
  );
}
