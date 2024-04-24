//importando páginas
import HomePage from "./src/pages/HomePage";
import SearchPage from "./src/pages/SearchPage";
import AnalyticsPage from "./src/pages/HomePage";

//importanto rotas stack
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          options={{ headerShown: "false" }}
          name="HomePage"
          component={HomePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
