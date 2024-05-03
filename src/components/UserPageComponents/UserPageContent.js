import { View, Text } from "react-native";

//css
import { DefaultStyles } from "../../styles/DefaultStyles";
import { UserPage } from "../../styles/UserPage";
//components
import IconComponent from "../IconComponent";
export default function UserPageContent() {
  return (
    <View style={[DefaultStyles.content, { width: "100%" }]}>
      <View style={UserPage.box_icon}>
        <IconComponent archive />
        <Text style={{ fontSize: 27.5, color: "white" }}>name</Text>
      </View>

      <View style={UserPage.container}>
        <Text style={{ fontSize: 27.5, color: "white" }}>Informações</Text>
        <Text style={{ fontSize: 20, color: "white" }}>Idade</Text>
        <Text style={{ fontSize: 20, color: "white" }}>Imc</Text>
        <Text style={{ fontSize: 20, color: "white" }}>Sexo</Text>
      </View>
    </View>
  );
}
