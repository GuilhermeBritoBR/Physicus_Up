import { View, Text } from "react-native";

//importando estilizações padroẽs da aplicação
import { DefaultStyles } from "../styles/DefaultStyles";

export default function FooterComponent() {
  return (
    <View style={DefaultStyles.Header}>
      <Text style={DefaultStyles.Text}>HOME|SEARCH|ANALYTICS</Text>
    </View>
  );
}
