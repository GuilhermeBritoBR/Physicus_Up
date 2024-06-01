import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//importantdo HOOKS
import { useState } from "react";
//Importando Styles
import { DefaultStyles } from "../styles/DefaultStyles";

//importando components
import Input_box_Component from "../components/Input_Box_Component";
import Button_Component from "../components/Button_Component";
import TextComponent from "../components/TextComponent";
import FooterComponent from "../components/FooterComponent";

//Importando ASYNC STORAGE
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function RunCalculator(){
    const [km, setKm]= useState('');
    const [horas, setHoras]= useState('');
    const [minutos, setMinutos]= useState('');
    const [segundos, setSegundos]= useState('');
    const [resultado, setResultado] = useState('');
function pace()  {
    console.log(km, horas, minutos, segundos, resultado);
    const tempo = (parseFloat(horas * 60) + parseFloat(minutos) + parseFloat(segundos / 60));
		let pace = (parseFloat(tempo) / parseFloat(km));
        console.log(pace);
		let paceMinutos = parseFloat(Math.floor(pace));
		let paceSegundos = parseFloat(Math.round((pace - paceMinutos) * 60));

	if(paceSegundos <= 10) {
		const paceSegundos = "0" + paceSegundos;
	}
  if (paceSegundos == 0){
    const paceSegundos = "00" + paceSegundos;
  }

	setResultado(`Ritmo de ${paceMinutos}:${paceSegundos} Min/KM`);  
}


  return (
    <View
      style={[
        DefaultStyles.content,
        {
          flex: 1,
          width: "100%",
         
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
        <TextComponent
            styleText={{ color: "white", fontSize: 28 }}
            title={"Calcular Ritmo de Corrida"}
          />
        <Input_box_Component
          onChangeText_propiedade={setKm}
          placeholder_propiedade={"Distância(km)"}
          teclado={"numeric"}
          altura={56}
          horizonte={180}
          valueTextInput={km}
        />
        <Input_box_Component
          onChangeText_propiedade={setHoras}
          placeholder_propiedade={"Horas"}
          teclado={"numeric"}
          altura={56}
          horizonte={180}
          valueTextInput={horas}
        />
                <Input_box_Component
          onChangeText_propiedade={setMinutos}
          placeholder_propiedade={"Minutos"}
          teclado={"numeric"}
          altura={56}
          horizonte={180}
          valueTextInput={minutos}
        />
                <Input_box_Component
          onChangeText_propiedade={setSegundos}
          placeholder_propiedade={"Segundos"}
          teclado={"numeric"}
          altura={56}
          horizonte={180}
          valueTextInput={segundos}
        />
        <Text style={{color: 'white', fontSize: 18}}>{resultado}</Text>
        <Button_Component
          fundo_buttom={"#1db954"}
          colorText_buttom={"#ffffff"}
          Pressionamento={pace}
          Button_title={"Calcular"}
          altura={56}
        />
      </LinearGradient>
      <FooterComponent />
    </View>
  );
}
