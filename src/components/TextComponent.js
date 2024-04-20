import { Text } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";

export default function TextComponent({title, styleText}) {
  return <Text style={styleText}>{title}</Text>

}
