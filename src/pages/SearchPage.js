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
          <PesquisarComponent
            On_press={() => Navigation.navigate("RunCalculator")}
            props_Text_Component={"Calculadora de ritmo"}
          />
          <PesquisarComponent props_Text_Component={"Adicionar Recorde"} />
          <PesquisarComponent 
          On_press={()=> Navigation.navigate("MyActitivies")}
          props_Text_Component={"Minhas corridas"} />
          <PesquisarComponent 
          On_press={()=> Navigation.navigate("MyAcademy")}
          props_Text_Component={"Meus treinos de musculação"} />
        </ScrollView>
      </View>
      <FooterComponent />
    </View>
  );
}
