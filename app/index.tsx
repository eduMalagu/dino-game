import { Link } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/4555-1560x950-c.webp")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Link href="/game" asChild replace>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.title}> Jogar </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#2e78b7",
    paddingVertical: 19,
    paddingHorizontal: 39,
    borderRadius: 9,
    marginBottom: 20,
  },
});
