import axios from "axios";
import { FlatList, Text, View } from "react-native";
//hooks
import React, { useState, useEffect } from "react";
//importar script
import SearchFunction from "../scripts/SearchFunction";
import { DefaultStyles } from "../styles/DefaultStyles";
import WidgetDefaultComponent from "../components/WidgetDefaultComponent";
import FooterComponent from "../components/FooterComponent";
import WidgetMusculacao_Component from "../components/WidgetMusculacao_Component";
import { ip } from "../scripts/ip";
//

const Item = ({title}) => (
    <View>
      <Text style={{color: 'white'}}>{title}</Text>
    </View>
  );
    export default function My_Academy_actitivies(){
        //constantes
            const [treinos, setTreinos] = useState([]);
            const [loading, setLoading] = useState(true);
            const [pace, setPace] = useState("");
            const [time, setTime] = useState("");
            
           
            //monitorar mudança e coleta de dados
            useEffect(() => {
                axios.get(`http://${ip}:3000/physicusup/meustreinosAcademy`)
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
                        <WidgetMusculacao_Component
                        data={item.date}
                        titleWidget={item.name}
                        KMPESO={item.series}
                        TEMPO={item.time}
                        ESFROÇO={item.level}
                        RITMOEXERCICIO={item.train}
                        />
                    </View>
            )}
          />
          </View>
          <FooterComponent/>
            </View>
        )
    }