import { View, Text, TouchableOpacity } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";
import { Footer } from "../styles/Footer";
import IconComponent from "./IconComponent";
//é o rodapé da aplicação, ele possui 3 opções que te direcionam para 3 páginas
export default function FooterComponent() {
  return (
    <View style={[DefaultStyles.Header]}>
      <TouchableOpacity style={[Footer.iconHomeView, { flex: 1 }]}>
        <View style={[Footer.iconHomeView, { flex: 1 }]}>
          <IconComponent
            style={DefaultStyles.Icon}
            archive={require("../assets/home.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[Footer.iconHomeView, { flex: 1 }]}>
        <View style={[Footer.iconHomeView, { flex: 1 }]}>
          <IconComponent
            style={DefaultStyles.Icon}
            archive={require("../assets/search.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[Footer.iconHomeView, { flex: 1 }]}>
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
