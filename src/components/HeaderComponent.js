import { View, Text } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";

export default function HeaderComponent() {
  return (
    <View style={DefaultStyles.Header}>
      <Text style={DefaultStyles.Text}>Physicus Up</Text>
    </View>
  );
}
