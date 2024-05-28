import axios from "axios";
import { FlatList, Text, View } from "react-native";
//hooks
import React, { useState, useEffect } from "react";
//importar script
import SearchFunction from "../scripts/SearchFunction";
import { DefaultStyles } from "../styles/DefaultStyles";
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
            <FlatList
            data={treinos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
                <View>
                        <Text style={{color: 'white', fontSize: 18}}>Nome: {item.name}</Text>
                        <Text style={{color: 'white', fontSize: 18}}>Distância: {item.distance}</Text>
                        <Text style={{color: 'white', fontSize: 18}}>Tempo: {item.time}</Text>
                        <Text style={{color: 'white', fontSize: 18}}>Nível: {item.level}</Text>
                    </View>
            )}
          />
            </View>
        )
    }