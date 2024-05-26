//importar o text para printar os dados corretamente
import { Text } from "react-native";

export default function SearchFunction(valor ){
    const index = 0;
    for(index < valor.length; indice++;){
        
    }
    return(
        <>
             {valor.map((item)=>
            (
        <Text style={{color: 'black', fontSize: 18}}>{item.name}</Text>
            ))}
        {valor.map((item)=>
            (
        <Text style={{color: 'black', fontSize: 18}}>{item.distance}</Text>
            ))}
        {valor.map((item)=>
            (
        <Text style={{color: 'black', fontSize: 18}}>{item.time}</Text>
            ))}
        {valor.map((item)=>
            (
        <Text style={{color: 'black', fontSize: 18}}>{item.level}</Text>
            ))}
        </>
    )
}