import { View, TouchableOpacity, Modal, Text } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";
import { Header } from "../styles/Header";

//importando componentes
import IconComponent from "./IconComponent";
import TextComponent from "./TextComponent";

//importando modal do header
import Add_Content from "./HomeComponents/Add_Content";
import ModalComponent from "./ModalComponent";

//importando HOOKS
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
//axios
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

//cabeçalho da aplicação, ele tem a função de mostrar seu perfil, adicionar o treino e mostrar o título da aplicação
export default function HeaderComponent({ titleHeaderPropiedade }) {
  useEffect(() => {
    loadTitle();
  }, []);
  const [add, setAdd] = useState(false);
  const Navigation = useNavigation();
  const [titleHeader, setTitleHeader] = useState("");
  async function loadTitle() {
    const nome_local = await AsyncStorage.getItem("Username");
    setTitleHeader(nome_local);
    console.log(titleHeader);
  }
  return (
    <View style={[DefaultStyles.Header, { width: "100%", flex: 0.4 }]}>
      <TouchableOpacity
        onPress={() => Navigation.navigate("UserPage")}
        style={[Header.IconPather, { flex: 0.9, justifyContent: "center" }]}
      >
        <View
          style={[Header.IconPather, { flex: 0.9, justifyContent: "center" }]}
        >
          <IconComponent
            style={[DefaultStyles.Icon]}
            //importando o arquivo de ícone do usuário
            archive={require("../assets/user.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={[Header.TitleHeader, { flex: 1.2 }]}>
        {titleHeader === "" ? (
          <Text
            style={[
              DefaultStyles.Text,
              {
                fontSize: 24,
                textAlign: "center",
                justifyContent: "center",
                flexDirection: "row",
                flex: 1,
              },
            ]}
          >
            {titleHeaderPropiedade}
          </Text>
        ) : (
          <Text
            style={[
              DefaultStyles.Text,
              {
                fontSize: 24,
                textAlign: "center",
                justifyContent: "center",
                flexDirection: "row",
                flex: 1,
              },
            ]}
          >
            Physicus Up
          </Text>
        )}
      </View>
      <TouchableOpacity
        onPress={() => setAdd(true)}
        style={[Header.addView, { flex: 0.9 }]}
      >
        <View style={[Header.addView, { flex: 0.9 }]}>
          <IconComponent
            archive={require("../assets/add.png")}
            style={[DefaultStyles.Icon]}
          />
        </View>
      </TouchableOpacity>
      <ModalComponent vidro={add} open={add}>
        <View style={{ flex: 1, width: "100%" }}>
          <TouchableOpacity style={{ flex: 0.8 }} onPress={() => setAdd(false)}>
            <View style={{ flex: 0.8, width: "100%" }}></View>
          </TouchableOpacity>

          <View style={{ flex: 0.2 }}>
            <Add_Content />
          </View>
        </View>
      </ModalComponent>
    </View>
  );
}
