import { createStackNavigator } from "@react-navigation/stack";
import { transactionsScreens } from "./ScreenName";
import { createStackFromConfig } from "./createStackFromConfig";
import { RootStackParamList } from "./types";


const Stack = createStackNavigator<RootStackParamList>();

const mainScreens = {
  ...transactionsScreens
}

export function RootNavigation() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {createStackFromConfig(mainScreens, Stack)}
    </Stack.Navigator>
  );
}