import { ScrollView, Text, TouchableOpacity, View } from "react-native";

//importando components
import PesquisarComponent from "../components/SearchComponents/PesquisarComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
//importando styles Default Styles
import { DefaultStyles } from "../styles/DefaultStyles";
//importando navigation
import { useNavigation } from "@react-navigation/native";
export default function SearchPage() {
  const Navigation = useNavigation();
  return (
    <View style={DefaultStyles.container}>
      <HeaderComponent />
      <View style={[DefaultStyles.content, { backgroundColor: "#121212" }]}>
        <ScrollView>
          <PesquisarComponent  On_press={() => Navigation.navigate("RitmoPage")  }props_Text_Component={"Calcular ritmo"} />

          <PesquisarComponent props_Text_Component={"Calcular IMC"} />
          <PesquisarComponent props_Text_Component={"Conferir Peso Ideal"} />
          <PesquisarComponent props_Text_Component={"Recordes"} />
          <PesquisarComponent props_Text_Component={"Calcular ritmo"} />
        </ScrollView>
      </View>
      <FooterComponent />
    </View>
  );
}
