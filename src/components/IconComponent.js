import { View, Image } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";

export default function IconComponent({archive, style}) {
  return (
        <Image 
        style={style}
        source={archive}
        />
  );
}
