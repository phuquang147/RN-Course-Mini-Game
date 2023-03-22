import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#4f042a", "#ddb52f"]} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
