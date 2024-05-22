import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ModernButtonComponent({title, press}){
    return(
        <TouchableOpacity style={styles.Touch} onPress={press}>
            <Text style={styles.Text}>{title}</Text>
        </TouchableOpacity>
    )
}
export const styles = StyleSheet.create({
    Text:{
        fontSize: 18,
        color: '#000000',

    },
    Touch:{
        justifyContent: 'center',
        alignItems: 'center',
        height:40,
        width:'100%',
        shadowColor: '#000000',
        shadowOffset: {width: -2, height: 0},
        shadowOpacity: 1,
        shadowRadius: 3,
        padding: 10,
        backgroundColor: '#ffffff',
    }
})