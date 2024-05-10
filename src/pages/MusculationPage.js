import react, { useState } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";

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
            title={"Adicionar treino"}
          />
          <View style={{ flex: 0, flexDirection: "row" }}>
            <Input_box_Component
              placeholder_propiedade={"Nome da atividade"}
              horizonte={312}
              altura={56}
            />
          </View>
          <View style={{ flex: 0, flexDirection: "row" }}>
            <Input_box_Component
              placeholder_propiedade={"Tipo de treino"}
              horizonte={312}
              altura={56}
            />
          </View>
          <View style={{ flex: 0, flexDirection: "row" }}>
            <Input_box_Component
              placeholder_propiedade={"Duração(Minutos)"}
              horizonte={312}
              altura={56}
              teclado={"numeric"}
            />
          </View>
          <View style={{ flex: 0, flexDirection: "row" }}>
            <Input_box_Component
              placeholder_propiedade={"Series"}
              horizonte={312}
              altura={56}
              teclado={"numeric"}
            />
          </View>
          <View style={{ flex: 0, flexDirection: "row" }}>
            <View
              style={{
                overflow: "hidden",
                borderRadius: 15,
                border: "solid",
                borderWidth: 1,
                borderColor: "#ffffff",
                backgroundColor: "white",
                margin: 10,
                height: 56,
                width: 312,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Picker
                selectedValue={esforco}
                style={{
                  width: 312,
                  height: 89,
                  backgroundColor: "white",
                  borderRadius: 15,
                  borderColor: "#000000",
                  border: "solid",
                  borderWidth: 1,
                  margin: 0,
                }}
                onValueChange={(item) => setEsforco(item)}
              >
                <Picker.Item label="Esforço dedicado [0-10]" value="" />
                <Picker.Item label="Fácil [1]" value="1" />
                <Picker.Item label="Fácil [2]" value="2" />
                <Picker.Item label="Fácil [3]" value="3" />
                <Picker.Item label="Moderado [4]" value="4" />
                <Picker.Item label="Moderado [5]" value="5" />
                <Picker.Item label="Moderado [6]" value="6" />
                <Picker.Item label="Difícil [7]" value="7" />
                <Picker.Item label="Difícil [8]" value="8" />
                <Picker.Item label="Difícil [9]" value="9" />
                <Picker.Item label="Muito Difícil [10]" value="10" />
              </Picker>
            </View>
          </View>

          <View style={{ flex: 0 }}>
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
