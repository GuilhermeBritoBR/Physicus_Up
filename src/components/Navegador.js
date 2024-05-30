import { useNavigation } from "@react-navigation/native"
const navigation = useNavigation();
export default function Navegador(name){
const Navegador = navigation.navigate(`${name}`);
return Navegador;
}
