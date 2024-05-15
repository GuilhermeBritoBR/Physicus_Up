import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//importantdo HOOKS
import { useState } from "react";
//Importando Styles
import { DefaultStyles } from "../styles/DefaultStyles";
//importando componentes estruturais de nossa aplicação
import FooterComponent from "../components/FooterComponent";
import IconComponent from "../components/IconComponent";
import HeaderComponent from "../components/HeaderComponent";
import UserPageContent from "../components/UserPageComponents/UserPageContent";

export default function UserPage() {
  return (
    <View
      style={[
        DefaultStyles.content,
        {
          flex: 1,
          width: "100%",
          border: "solid",
          borderWidth: 1,
          borderRadius: 15,
          borderColor: "#000000cc",
        },
      ]}
    >
      <LinearGradient
        colors={["#000000", "#535353"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0, 1]}
        style={[
          {
            flex: 3,
            width: "100%",
            borderWidth: 1,
            borderColor: "black",
            border: "solid",
            borderRadius: 15,
            backgroundColor: "#000000",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <View>
          <TextComponent
            title={"IMC"}
            styleText={[DefaultStyles.Text, { color: "#ffffff", fontSize: 28 }]}
          />
        </View>
        <View>
          <Image
            source={require("../../assets/imagem/brito.jpg")} 
            style={{width: 100, height: 100, borderRadius: 360, marginTop: 7,}}
          />
          <Text style={{color: "white", textAlign:"center" }}>Brito suricato</Text>
        </View>
        <Text style={{ color: "white", fontSize: 20 }}>{imc}</Text>
        <Text style={{ color: "white", fontSize: 20 }}>{situation}</Text>

        <Button_Component
          fundo_buttom={"#1db954"}
          colorText_buttom={"#ffffff"}
          Pressionamento={SaveData}
          Button_title={"Salvar"}
          altura={56}
        />
        <Button_Component
          Pressionamento={xDoModal}
          Button_title={"Fechar"}
          colorText_buttom={"#ffffff"}
          fundo_buttom={"#000000"}
          altura={56}
        />
      </LinearGradient>
    </View>
  );
}
