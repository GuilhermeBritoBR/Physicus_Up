import { View } from "react-native";

//importando CSS
import { DefaultStyles } from "../../styles/DefaultStyles";

//importando components
import PesquisarComponent from "../SearchComponents/PesquisarComponent";

//importar navigation
import { useNavigation } from "@react-navigation/native";

export default function Add_Content() {
  const Navigation = useNavigation();
  return (
    <View style={[DefaultStyles.content]}>
      <PesquisarComponent props_Text_Component={"Corrida de rua"} />

      <PesquisarComponent
        On_press={() => Navigation.navigate("MusculationPage")}
        props_Text_Component={"Musculação"}
      />
    </View>
  );
}
