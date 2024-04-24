import { View, Text, TouchableOpacity } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";
import { Footer } from "../styles/Footer";
import IconComponent from "./IconComponent";

//importando rota STACK
import { useNavigation } from "@react-navigation/native";

//é o rodapé da aplicação, ele possui 3 opções que te direcionam para 3 páginas
export default function FooterComponent() {
  const navigation = useNavigation();

  return (
    <View style={[DefaultStyles.Header]}>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomePage")}
        style={[Footer.iconHomeView, { flex: 1 }]}
      >
        <View style={[Footer.iconHomeView, { flex: 1 }]}>
          <IconComponent
            style={DefaultStyles.Icon}
            archive={require("../assets/home.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={[Footer.iconHomeView, { flex: 1 }]}
      >
        <View style={[Footer.iconHomeView, { flex: 1 }]}>
          <IconComponent
            style={DefaultStyles.Icon}
            archive={require("../assets/search.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Analytics")}
        style={[Footer.iconHomeView, { flex: 1 }]}
      >
        <View style={[Footer.iconHomeView, { flex: 1 }]}>
          <IconComponent
            style={[DefaultStyles.Icon, { width: 25, height: 20 }]}
            archive={require("../assets/arrow.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
