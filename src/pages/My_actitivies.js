import axios from "axios";
import { FlatList, Text, View } from "react-native";
//hooks
import React, { useState, useEffect } from "react";
//importar script
import SearchFunction from "../scripts/SearchFunction";
import { DefaultStyles } from "../styles/DefaultStyles";
import WidgetDefaultComponent from "../components/WidgetDefaultComponent";
import FooterComponent from "../components/FooterComponent";
//
var ip = `127.0.0.1`;
const Item = ({title}) => (
    <View>
      <Text style={{color: 'white'}}>{title}</Text>
    </View>
  );
    export default function My_actitivies(){
        //constantes
            const [treinos, setTreinos] = useState([]);
            const [loading, setLoading] = useState(true);
            const [pace, setPace] = useState("");
            const [round_minutes, setRound_minutes] = useState("");

            function round_time(){

            }
           
            //monitorar mudança e coleta de dados
            useEffect(() => {
                axios.get(`http://localhost:3000/physicusup/meustreinos`)
                    .then(response => {
                        setTreinos(response.data);
                        setLoading(false);
                        console.log(treinos.distance);
                        
                    })
                    .catch(error => {
                        console.error(error);
                        setLoading(false);
                    });
            }, []);
        
        //texto para quando estiver carregando
        if (loading) {
            return (
                <View style={DefaultStyles.container}>
                    <Text style={{color: 'white', fontSize: 18}}>Carregando...</Text>
                </View>
            );
        }
        //
        return(
            <View style={DefaultStyles.container}>
                <Text style={{color: 'white'}}>{treinos.level}</Text>
            <View style={DefaultStyles.content}>
            <FlatList
            data={treinos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
                <View>
                    {function Round_time(){
                        if(item.time >= 60){
                        const time = (item.time/60).toFixed(1)}
                    }}
                        <WidgetDefaultComponent
                        corDegrade1={"#1db954"}
                        corDegrade2={"#309f57"}
                        titleWidget={`${item.name}`}
                        KMPESO={`KM:${item.distance}`}
                        RITMOEXERCICIO={`${item.pace}`}
                        ESFROÇO={`ESFORÇO:${item.level}`}
                        
                        />
                    </View>
            )}
          />
          </View>
          <FooterComponent/>
            </View>
        )
    }