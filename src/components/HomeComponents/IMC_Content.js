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
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);

  return (
    <View
      style={[
        DefaultStyles.content,
        {
          flex: 0.6,
          width: "80%",
          border: "solid",
          borderWidth: 1,
          borderRadius: 15,
          borderColor: "#000000cc",
        },
      ]}
    >
      <View>
        <TextComponent
          title={"IMC"}
          styleText={[DefaultStyles.Text, { color: "#ffffff" }]}
        />
      </View>
      <Input_box_Component
        onChangeText_propiedade={setAltura}
        placeholder_propiedade={"Sua altura.."}
      />
      <Input_box_Component
        onChangeText_propiedade={setPeso}
        placeholder_propiedade={"Seu peso(KG).."}
      />
      <Button_Component Button_title={"Calcular"} />
      <View></View>
    </View>
  );
}
