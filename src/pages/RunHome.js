import React from 'react';
import { ScrollView, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';  
import { DefaultStyles } from "../styles/DefaultStyles";
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from "../components/FooterComponent";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RunHome() {
  return (

    <View style={DefaultStyles.container}>
       <HeaderComponent />
      <LinearGradient
        colors={["#000000", "#121212"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 0}}
        style={[
          ,{
            flex: 3,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
          <View style={{ flex: 1, marginTop: 20 }}>
          <Text style={{ color: "white", textAlign: "center", fontSize: 35 }}>
            Corrida no final da tarde
          </Text>
          <Text style={{ color: "white", textAlign: "center", fontSize: 28 }}>
            10/05/2024
          </Text>
        
          <View style={{ margin: 40, flex:2,}}>

            <View style={{alignItems:"center"}}>
            <Text style={{ color: "white", width: 250, textAlign:"center", fontSize: 28, padding: 10, borderColor:"white", borderBottomWidth: 2,}}>  Distância: 5 KM </Text>
            <Text style={{ color: "white", width: 250, textAlign: "center", fontSize: 28, padding: 10, borderColor:"white", borderBottomWidth: 2, }}> Tempo: 20:00 </Text>
            </View>

            <View style={{alignItems:"center"}}>
            <Text style={{ color: "white", width: 250, textAlign: "center", fontSize: 28, padding: 10, borderColor:"white", borderBottomWidth: 2,}}> Ritmo:4’00 Min/Km </Text>
            <Text style={{ color: "white", width: 250, textAlign: "center", fontSize: 28, padding: 10, borderColor:"white", borderBottomWidth: 2, }}> Esforço: 9</Text>
            </View>

            

          </View>
          </View>
          <MaterialCommunityIcons name="shoe-sneaker" size={250} color="#1DB954" />
      </LinearGradient>
      <FooterComponent />

      </View>

  );
}
