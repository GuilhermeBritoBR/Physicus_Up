import react, { useState, useEffect } from "react";
import { ImageBackground, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//importando CSS
import { DefaultStyles } from "../styles/DefaultStyles";
import axios from "axios";
//importando components
import Input_box_Component from "../components/Input_Box_Component";
import Button_Component from "../components/Button_Component";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import TextComponent from "../components/TextComponent";
import LittleinputBoxComponent from '../components/LittleInputBoxComponent'
import RitmoFunction from "../scripts/RitmoFunction";
import { ip } from "../scripts/ip";

export default function MusculationPage() {
  const [km, setKm]= useState('');
  const [horas, setHoras]= useState('');
  const [minutos, setMinutos]= useState('');
  const [segundos, setSegundos]= useState('');
  const [resultado, setResultado] = useState('');
  const [name, setName] = useState("");
  const [newDistance, setNewDistance] = useState("");
  const[timeString,setTimeString] = useState("");
  
    //
    useEffect(()=>{
      setNewDistance(km.replace(",","."));
        setTimeString(`${horas}:${minutos}:${segundos}`)
        console.log(timeString);
      
    },[horas, minutos, segundos])
    //
  async function Save_Record(){
    const saveRitmo = RitmoFunction(newDistance,horas,minutos,segundos);
        console.log(`Console verifica ritmo: ${saveRitmo}`);
        const pace = saveRitmo;
        //
    const dados = { 
      "name":name, 
      "distancia": newDistance, 
      "ritmo":pace , 
      "tempo": timeString };

    
    try {
      if (
        name !== "" ||
        km !== "" ||
        timeString !== "" 
        
      ) {
        await axios.post(`http://${ip}:3000/api/saveRecorde`, dados);
        alert("Recorde salvo com sucesso!");
        
      } else {
        alert("Preencha todos os campos!");
      }
    } catch (error) {
      console.log(`Erro ao criar usuário: ${error}`);
    }
  }
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
            <View style={{ flexDirection: "row" }}>
            
              <Input_box_Component
                placeholder_propiedade={"Nome da atividade"}
                horizonte={312}
                altura={56}
                onChangeText_propiedade={setName}
                valueTextInput={name}
              />
            </View>
            <View style={{flexDirection: "row" }}>
<View style={{margin:4}}>
            <LittleinputBoxComponent
                placeholder_propiedade={"KM"}
                horizonte={56}
                altura={56}
                teclado={"numeric"}
                onChangeText_propiedade={setKm}
                valueTextInput={km}
              />
              </View>
<View style={{margin:4}}>
              <LittleinputBoxComponent
                placeholder_propiedade={"Hour"}
                horizonte={56}
                altura={56}
                teclado={"numeric"}
                onChangeText_propiedade={setHoras}
                valueTextInput={horas}
              />
</View>
              <View style={{margin:4}}>
              <LittleinputBoxComponent
                placeholder_propiedade={"Min"}
                horizonte={56}
                altura={56}
                teclado={"numeric"}
                onChangeText_propiedade={setMinutos}
                valueTextInput={minutos}
              />
</View>
              <View style={{margin:4}}>
              <LittleinputBoxComponent
                placeholder_propiedade={"Seg"}
                horizonte={56}
                altura={56}
                teclado={"numeric"}
                onChangeText_propiedade={setSegundos}
                valueTextInput={segundos}
              />
              </View>
            </View>
            
            

            <View style={{  }}>
              <Button_Component
                colorText_buttom={"#ffffff"}
                fundo_buttom={"#1db954"}
                Button_title={"Salvar"}
                altura={56}
                Pressionamento={Save_Record}
              />
            </View>
          </View>
      </LinearGradient>
      <FooterComponent />
    </View>
  );
}
