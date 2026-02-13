import { Image, StyleSheet, View } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("@/assets/images/Captura_de_tela_2026-02-12_100921.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(247, 247, 247)",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
