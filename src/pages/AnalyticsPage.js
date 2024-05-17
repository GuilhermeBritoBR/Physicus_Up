import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { DefaultStyles } from "../styles/DefaultStyles";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import BlockDefaultComponent from "../components/AnalyticsPage/BlockDefaultComponent";

export default function AnalyticsPage() {
  return (
    <View style={DefaultStyles.container}>
      <HeaderComponent />
      <View
        style={[
          DefaultStyles.content,
          { flex: 3, backgroundColor: "rgba(0, 0, 0, 0.8)" },
        ]}
      >
        <ScrollView>
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
            Estatisticas
          </Text>
          <TouchableOpacity>
          <BlockDefaultComponent
            titleBlock={"Evolução de tempo"}
            corDegrade1={"#B3B3B3"}
            corDegrade2={"#B3B3B3"}
          />
          </TouchableOpacity>

          <TouchableOpacity>
          <BlockDefaultComponent
            titleBlock={"Evolução de peso"}
            corDegrade1={"#B3B3B3"}
            corDegrade2={"#B3B3B3"}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <BlockDefaultComponent
            titleBlock={"Evolução de carga"}
            corDegrade1={"#B3B3B3"}
            corDegrade2={"#B3B3B3"}
          />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <FooterComponent />
    </View>
  );
}
