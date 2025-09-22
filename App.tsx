import { StatusBar, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "./src/routes/Navigation";

function App() {

  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme}/>
      <StatusBar barStyle={'default'} />
    </SafeAreaProvider>
  );
}

export default App;