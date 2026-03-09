import { Link } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function End() {
  const score = 0;
  return (
    <ImageBackground
      source={require("../assets/images/4555-1560x950-c.webp")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.score}>Your score: {score}</Text>
        <Link href="/" asChild replace>
          <Text style={styles.button}>Play Again</Text>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  character: {
    marginBottom: 20,
  },

  obstacle: {
    marginBottom: 20,
  },

  score: {
    fontSize: 24,
    marginBottom: 20,
  },

  button: {
    width: "auto",
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#2e78b7",
    borderRadius: 999,
    fontSize: 18,
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
