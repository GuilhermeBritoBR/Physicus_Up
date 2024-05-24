import { Text, View } from "react-native";
import LinearGradient from 'expo-linear-gradient';  
import { DefaultStyles } from "../styles/DefaultStyles";
import FooterComponent from "../components/FooterComponent";

export default function RunHome() {
  return (
    <View style={DefaultStyles.container}>
      <LinearGradient
        colors={["#1DB954", "#309F57"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <View style={[DefaultStyles.content, { flex: 3 }]}>
          <Text style={{ color: "white", textAlign: "center", fontSize: 28 }}>
            Corrida no final da tarde
          </Text>
          <Text style={{ color: "white", textAlign: "center", fontSize: 28 }}>
            10/05/2024
          </Text>
          <View style={{ margin: 10 }}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 25 }}> 5 KM 20:00 </Text>
            <Text style={{ color: "white", textAlign: "center", fontSize: 25 }}> 4’00 Min/Km </Text>
            <Text style={{ color: "white", textAlign: "center", fontSize: 25 }}> Esforço: 9</Text>
          </View>
        </View>
        <FooterComponent />
      </LinearGradient>
    </View>
  );
}
