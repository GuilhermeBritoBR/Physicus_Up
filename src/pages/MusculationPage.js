import { Image, View } from "react-native";
//importando CSS
import { DefaultStyles } from "../styles/DefaultStyles";
//importando components
import Input_box_Component from "../components/Input_Box_Component";
import Button_Component from "../components/Button_Component";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import TextComponent from "../components/TextComponent";
import { LinearGradient } from "expo-linear-gradient";
export default function MusculationPage(){
    return(
        <View style={DefaultStyles.container}>
            <HeaderComponent/>
            <LinearGradient
            colors={["#000000", "#535353"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 1]}
            style={[
                { flex: 3, width: '100%', borderWidth:1, borderColor: 'black', border: 'solid', borderRadius: 15, backgroundColor: '#000000',justifyContent: 'center', alignItems: 'center'}
            ]}
          >
           
            <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex:0}}>
            <Image source={require('../assets/Musc/strongmen.png')} style={DefaultStyles.IconAddPage}/>
            </View>

                <TextComponent styleText={{color: 'white', fontSize:24,}} title={"Adicionar treino"}/>
            <View style={{flex:0, flexDirection: 'row'}}>
                
            <Input_box_Component placeholder_propiedade={"Tipo de treino"} />
            <Input_box_Component placeholder_propiedade={"Duração(Minutos)"} />
            </View>
            <View style={{flex:0, flexDirection: 'row'}}>
            <Input_box_Component placeholder_propiedade={"Series"} />
            <Input_box_Component placeholder_propiedade={"Esforço(0-10)"} />
           
            </View>
            <View style={{flex:0}}>
            <Button_Component colorText_buttom={"#ffffff"} fundo_buttom={"#1db954"} Button_title={"Salvar"}/>
            </View>
            </View>
            </LinearGradient> 
        <FooterComponent/>
        </View>
    );
}