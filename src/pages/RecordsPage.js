import react, { useState } from "react";
import { ImageBackground, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//importando CSS
import { DefaultStyles } from "../styles/DefaultStyles";
//importando components
import Input_box_Component from "../components/Input_Box_Component";
import Button_Component from "../components/Button_Component";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import TextComponent from "../components/TextComponent";

export default function MusculationPage() {
  const [esforco, setEsforco] = useState("");
  return (
    <View style={DefaultStyles.container}>
      <LinearGradient
        colors={["#535353", "#000000"]}
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
        
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 30,
            }}
          >
            <TextComponent
              styleText={{ color: "white", fontSize: 28 }}
              title={"Recordes"}
            />
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Input_box_Component
                placeholder_propiedade={"Nome da atividade"}
                horizonte={312}
                altura={56}
              />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Input_box_Component
                placeholder_propiedade={"Tempo(Minutos)"}
                horizonte={312}
                altura={56}
                teclado={"numeric"}
              />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Input_box_Component
                placeholder_propiedade={"Distância(Metros)"}
                horizonte={312}
                altura={56}
                teclado={"numeric"}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Button_Component
                colorText_buttom={"#ffffff"}
                fundo_buttom={"#1db954"}
                Button_title={"Salvar"}
                altura={56}
              />
            </View>
          </View>
      </LinearGradient>
      <FooterComponent />
    </View>
  );
}
