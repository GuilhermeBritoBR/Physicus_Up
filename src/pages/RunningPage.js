import react, { useState, useEffect } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import { Modal } from "react-native";
import {getToday, getFormatedDate} from 'react-native-modern-datepicker';
//importando CSS
import { DefaultStyles } from "../styles/DefaultStyles";
//importando components
import Input_box_Component from "../components/Input_Box_Component";
import Button_Component from "../components/Button_Component";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import TextComponent from "../components/TextComponent";
import Little_Input_box_Component from "../components/LittleInputBoxComponent";
//axios
import axios from "axios";
//date picker
import DatePicker from "react-native-modern-datepicker";
import { TouchableOpacity } from "react-native-web";
import ModernButtonComponent from "../components/ModernButtonComponent";
//importando funções
import RitmoFunction from "../scripts/RitmoFunction";
import { ip } from "../scripts/ip";

export default function RunningPage() {

  //trabalhando função d datePicker
  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate()- 10000))
  function openModal(){
    setVisible(!visible);
  }
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [obs, setObs] = useState("");
  const [date, setDate] = useState("");
  const [visible, setVisible] = useState(false);
  const [newDistance, setNewDistance] = useState("");
  //variaveis para somar
  
  const [seconds, setSeconds] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  //exemplo lindo para a página de atividades
  const [timeString, setTimeString] = useState("");
  //função de enviar dados via post
  useEffect(()=>{
    setNewDistance(distance.replace(",","."));
      setTimeString(`${hours}:${minutes}:${seconds}`)
      console.log(timeString);
    setTime((hours*60)+(minutes)+(seconds/60));
  },[hours, minutes, seconds])
  async function atualizarDados() {
  //
    const saveRitmo = RitmoFunction(newDistance,hours,minutes,seconds);
        console.log(`Console verifica ritmo: ${saveRitmo}`);
        const pace = saveRitmo;
        //
    const dados = { name, distance, time, obs, level, date, pace , timeString };

    
    try {
      if (
        name !== "" ||
        distance !== "" ||
        time !== "" ||
        obs !== "" ||
        level !== "" ||
        date !== ""
      ) {
        await axios.post(`http://${ip}:3000/api/createDados`, dados);
        alert("Atividade salva com sucesso!");
        
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
            styleText={{ color: "white", fontSize: 28 ,}}
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
          <View style={{ flex: 1, flexDirection: "row",}}>
            <Little_Input_box_Component
              placeholder_propiedade={"Distância (km)"}
              horizonte={74}
              altura={56}
              teclado={"numeric"}
              valueTextInput={distance}
              onChangeText_propiedade={setDistance}
              margin={4}
            />
             <Little_Input_box_Component
              placeholder_propiedade={"Horas"}
              horizonte={74}
              altura={56}
              teclado={"numeric"}
              valueTextInput={hours}
              onChangeText_propiedade={setHours}
              margin={4}
            />
            <Little_Input_box_Component
              placeholder_propiedade={"Min"}
              horizonte={74}
              altura={56}
              teclado={"numeric"}
              valueTextInput={minutes}
              onChangeText_propiedade={setMinutes}
              margin={4}
            />
            <Little_Input_box_Component
              placeholder_propiedade={"Segs"}
              horizonte={74}
              altura={56}
              teclado={"numeric"}
              valueTextInput={seconds}
              onChangeText_propiedade={setSeconds}
              margin={4}
            />
           
            </View>
           
        
          <View style={{ flex: 1, flexDirection: "row" }}>
          <Button_Component  colorText_buttom={"#ffffff"}
              fundo_buttom={"#1db954"}
              Button_title={"Data"}
              altura={56}
              Pressionamento={() => openModal()}
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
          <Modal style={DefaultStyles.ModalCalendar} visible={visible}>
              
                <DatePicker mode='calendar' 
                formart="DD/MM/YYYY"
                minimumDate={startDate}
                style={DefaultStyles.Calendar}
                onDateChange={(item) => setDate(item)} selected={date} />
            <ModernButtonComponent title={"Salvar"} press={openModal} />
          </Modal>
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
                <Picker.Item label="Fácil [1]" value="Fácil [1]" />
                <Picker.Item label="Fácil [2]" value="Fácil [2]" />
                <Picker.Item label="Fácil [3]" value="Fácil [3]" />
                <Picker.Item label="Moderado [4]" value="Moderado [4]" />
                <Picker.Item label="Moderado [5]" value="Moderado [5]" />
                <Picker.Item label="Moderado [6]" value="Moderado [6]" />
                <Picker.Item label="Difícil [7]" value="Difícil [7]" />
                <Picker.Item label="Difícil [8]" value="Difícil [8]" />
                <Picker.Item label="Difícil [9]" value="Difícil [9]" />
                <Picker.Item label="Muito Difícil [10]" value="Muito Difícil [10]" />
              </Picker>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <Button_Component
              colorText_buttom={"#ffffff"}
              fundo_buttom={"#1db954"}
              Button_title={"Salvar"}
              altura={56}
              Pressionamento={atualizarDados}
            />
          </View>
        </View>
      </LinearGradient>
      <FooterComponent />
    </View>
  );
}
