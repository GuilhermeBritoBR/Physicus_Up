import react, { useState, useEffect } from "react";
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
//axios
import axios from "axios";

export default function RunningPage() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [obs, setObs] = useState("");
  const [date, setDate] = useState("");
  //variaveis para somar

  //
  // useEffect(() => {
  //   // Função para carregar os dados ao iniciar o aplicativo
  //   carregarDados();
  // }, []);

  // const carregarDados = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/dados");
  //     setDados(response.data);
  //     const nome = dados.nome;
  //     console.log("ESTOUAQUI", dados.nome);
  //     await AsyncStorage.setItem("Username", nome);
  //   } catch (error) {
  //     console.error("Erro ao carregar os dados:", error);
  //   }
  // };
  //função de enviar dados via post
  const atualizarDados = async () => {
    console.log(name,
      distance,
      time,
      obs,
      level,
      );
    if (
      name !== "" ||
      distance !== "" ||
      time !== "" ||
      obs !== "" ||
      level !== "" ||
      date !== ""
    ) {
      try {
        await axios.post("http://localhost:3000/api/addrun", {
          name,
          distance,
          time,
          obs,
          level,
          date,
        });
        // Recarregar os dados após a atualização
      } catch (error) {
        console.error("Erro ao atualizar os dados:", error);
        alert("Erro ao atualizar os dados");
      }
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

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
            title={"Adicionar Corrida"}
          />
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Input_box_Component
              placeholder_propiedade={"Nome da atividade.."}
              horizonte={312}
              altura={56}
              valueTextInput={name}
              onChangeText_propiedade={setName}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Input_box_Component
              placeholder_propiedade={"Distância (km)"}
              horizonte={312}
              altura={56}
              teclado={"numeric"}
              valueTextInput={distance}
              onChangeText_propiedade={setDistance}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Input_box_Component
              placeholder_propiedade={"Tempo"}
              horizonte={312}
              altura={56}
              teclado={"numeric"}
              valueTextInput={time}
              onChangeText_propiedade={setTime}
            />
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Input_box_Component
              placeholder_propiedade={"Obs"}
              horizonte={312}
              altura={56}
              valueTextInput={obs}
              onChangeText_propiedade={setObs}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
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
                selectedValue={level}
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
                onValueChange={(item) => setLevel(item)}
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

          <View style={{ flex: 1 }}>
            <Button_Component
              colorText_buttom={"#ffffff"}
              fundo_buttom={"#1db954"}
              Button_title={"Salvar"}
              altura={56}
              Pressionamento={() => atualizarDados()}
            />
          </View>
        </View>
      </LinearGradient>
      <FooterComponent />
    </View>
  );
}
