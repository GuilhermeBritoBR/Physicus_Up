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
        useEffect(()=>{
            Get_data();
        },[data])
        const [data, setData] = useState({});
        async function Get_data(){
            //
            try{
            const response = await axios.get(`http://${ip}:3000/physicusup/meustreinos`);
            setData(response.data);
            console.log("deu certo, pelo menos até agora");
            console.log(data.level);

            }
            catch(error){
                console.error("erro na coleta");
            }
            //
        } 
        return(
            <View style={DefaultStyles.container}>
                <Text style={{color: 'white'}}>{data.level}</Text>
            <FlatList
            data={data}
            renderItem={({item}) => <Item title={item.level} />}
            keyExtractor={item => item.id}
          />
            </View>
        )
    }