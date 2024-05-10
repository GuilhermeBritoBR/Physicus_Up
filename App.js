//importando páginas
import HomePage from "./src/pages/HomePage";
import SearchPage from "./src/pages/SearchPage";
import AnalyticsPage from "./src/pages/AnalyticsPage";
import MusculationPage from "./src/pages/MusculationPage";
import UserPage from "./src/pages/UserPage";
import RecordsPage from "./src/pages/RecordsPage";

//importanto rotas stack
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Search" component={SearchPage} />
        <Stack.Screen name="Analytics" component={AnalyticsPage} />
        <Stack.Screen name="MusculationPage" component={MusculationPage} />
        <Stack.Screen name="UserPage" component={UserPage} />
        <Stack.Screen name="RecordsPage" component={RecordsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
