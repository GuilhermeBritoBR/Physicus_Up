import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//importantdo HOOKS
import { useState } from "react";
//Importando Styles
import { DefaultStyles } from "../styles/DefaultStyles";
//importando componentes estruturais de nossa aplicação
import FooterComponent from "../components/FooterComponent";
import UserPageContent from "../components/UserPageComponents/UserPageContent";

export default function UserPage() {
  return (

    <View style={DefaultStyles.container}>

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
          backgroundColor: "#000000",
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <View>
        <Image
          source={require("../assets/brito.jpg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 360,
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 220,
          }}
        />

      </View>
      
      <UserPageContent />
    </LinearGradient>
    <FooterComponent />
    </View>
  );
}
