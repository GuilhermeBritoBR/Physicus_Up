<<<<<<< Updated upstream
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

//importando styles Default Styles
import { DefaultStyles } from "../styles/DefaultStyles";

//importando components
import PesquisarComponent from "../components/TelaPesquisar/PesquisarComponent";
=======
import { ScrollView, Text, View } from "react-native";

//importando styles Default Styles
import { DefaultStyles } from "../styles/DefaultStyles";
import PesquisarComponent from "../components/PesquisarPage/PesquisarComponent";
>>>>>>> Stashed changes
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
export default function SearchPage() {
  return (
<<<<<<< Updated upstream
    <View style={[DefaultStyles.container]}>
      <HeaderComponent />
      <View style={[DefaultStyles.content]}>
        <ScrollView>
          <TouchableOpacity>
            <PesquisarComponent props_Text_Component={"Calcular ritmo"} />
          </TouchableOpacity>
=======
    <View style={DefaultStyles.container}>
      <HeaderComponent />
      <View style={DefaultStyles.content}>
        <ScrollView>
          <PesquisarComponent props_Text_Component={"Calcular ritmo"} />
>>>>>>> Stashed changes
          <PesquisarComponent props_Text_Component={"Calcular IMC"} />
          <PesquisarComponent props_Text_Component={"Conferir Peso Ideal"} />
          <PesquisarComponent props_Text_Component={"Calcular ritmo"} />
          <PesquisarComponent props_Text_Component={"Calcular ritmo"} />
        </ScrollView>
      </View>
      <FooterComponent />
    </View>
  );
}
