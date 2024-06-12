import { View, Image } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";

//é o componente de ícone do site, eles tem todos o mesmo tamanho
export default function IconComponent({ archive, style }) {
  return <Image style={style} source={archive} />;
}
