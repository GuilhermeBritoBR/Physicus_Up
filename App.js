//importando páginas
import HomePage from "./src/pages/HomePage";
import SearchPage from "./src/pages/SearchPage";
import AnalyticsPage from "./src/pages/AnalyticsPage";

//importanto rotas stack
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Search" component={SearchPage} />
        <Stack.Screen name="Analytics" component={AnalyticsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
