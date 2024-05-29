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
            const [time, setTime] = useState("");
            
           
            //monitorar mudança e coleta de dados
            useEffect(() => {
                axios.get(`http://localhost:3000/physicusup/meustreinos`)
                    .then(response => {
                        setTreinos(response.data);
                        setLoading(false);
                    }
                        
            )
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
            <View style={DefaultStyles.content}>
            <FlatList
            data={treinos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
                <View>
                        <WidgetDefaultComponent
                        corDegrade1={"#1db954"}
                        corDegrade2={"#309f57"}
                        titleWidget={`${item.name}`}
                        KMPESO={`${item.distance}KM`}
                        RITMOEXERCICIO={`${item.pace}`}
                        TEMPO={item.timeString}
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