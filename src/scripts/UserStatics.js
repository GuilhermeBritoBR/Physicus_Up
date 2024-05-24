//imports
import React from "react";
import { Text, TextInput, Button, View } from "react-native";
import { useState, useEffect } from "react";
//axios
import axios from "axios";
export default function UserStatics(){
    useEffect(()=>{
        setbaseLength(base.length);
    },[base])
    async function Update_Data(){
        try {
            await axios.post("http://localhost:3000/data_trainning",base);
            // Recarregar os dados após a atualização
            alert("Dados atualizados com sucesso");
          } catch (error) {
            console.error("Erro ao atualizar os dados:", error);
            alert("Erro ao atualizar os dados");
          }
    }

    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [baseLength, setbaseLength] = useState(0);
    const newData = {id:baseLength , name: name, value: value,}
    const [base, setBase] = useState([
        {id: 0 , name: 'Davi', value: 1,},
        {id: 1, name:  'Brito', value: 2,},
        {id: 2, name:  'Nicolas', value: 3}
])
    console.log(baseLength);

    return(
        <>
        <TextInput placeholder="Nome" onChangeText={setName} value={name}/>
        <TextInput placeholder="Value" onChangeText={setValue} value={value}/>

        {base.map((item)=>(
            <Text style={{color: 'black', fontSize: 18}}>{item.name}</Text>
        ))}
        <Button onPress={(prev)=> setBase((prev) =>([...prev, newData]))}>ADICIONAR</Button>
        <Button onPress={Update_Data}>Salvar</Button>
        </>
    )
}
