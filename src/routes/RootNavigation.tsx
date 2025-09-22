import { createStackNavigator } from "@react-navigation/stack";
import { transactionsScreens } from "./ScreenName";
import { RootStackParamList } from "./types";
import { useEffect, useState } from "react";
import SplashScreen from "../screens/SplashScreen";


const Stack = createStackNavigator<RootStackParamList>();

const mainScreens = {
  ...transactionsScreens
}

export function RootNavigation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); 
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
        isLoading ?
        <Stack.Screen name="Splash" component={SplashScreen} />
        : (
          <>
          {
           Object.entries(mainScreens).map(([name, component]) => (
             <Stack.Screen
               name={name as never}
               component={component.screen as never}
               options={component.options}
               key={name}
             />
            ))
          }
        </>
        )
      }
      
    </Stack.Navigator>
  );
}