import LottieView from "lottie-react-native"
import { StyleSheet } from "react-native";

const SplashScreen = () => {

  return (
    // <>
       <LottieView source={require('../assets/animations/loading.json')} autoPlay loop style={styles.container} />
    // </>
  )
}

const styles = StyleSheet.create({
    container: {
      width: '100%', 
      height: '100%' 
    }
});

export default SplashScreen