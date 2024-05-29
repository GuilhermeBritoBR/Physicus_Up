import react from "react";
//importando páginas
import HomePage from "./src/pages/HomePage";
import SearchPage from "./src/pages/SearchPage";
import AnalyticsPage from "./src/pages/AnalyticsPage";
import MusculationPage from "./src/pages/MusculationPage";
import UserPage from "./src/pages/UserPage";
import RecordsPage from "./src/pages/RecordsPage";
import RunningPage from "./src/pages/RunningPage";
import RunHome from "./src/pages/RunHome";

//importanto rotas stack
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RunCalculator from "./src/pages/RunCalculator";
const Stack = createNativeStackNavigator();

//functions
import UserStatics from "./src/scripts/UserStatics";
import My_actitivies from "./src/pages/My_actitivies";
import My_Academy_actitivies from "./src/pages/MyTrainningsAcademy";

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
        <Stack.Screen name="RunningPage" component={RunningPage} />
        <Stack.Screen name="RunCalculator" component={RunCalculator} />
        <Stack.Screen name="RunHome" component={RunHome} />
        <Stack.Screen name="UserStatics" component={UserStatics}/>
        <Stack.Screen name="MyActitivies" component={My_actitivies}/>
        <Stack.Screen name="MyAcademy" component={My_Academy_actitivies}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
