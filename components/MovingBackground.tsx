import { useEffect } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function MovingBackground() {
  const { width } = Dimensions.get("window");
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: -offset.value }],
  }));

  useEffect(() => {
    offset.value = withRepeat(
      withTiming(width, { duration: 5000, easing: Easing.linear }),
      -1,
    );
  }, [offset]);
  return (
    <View style={styles.screen}>
      <Animated.View style={[styles.container, animatedStyles]}>
        <Image
          resizeMode="cover"
          style={{ width, height: "100%" }}
          source={require("@/assets/images/corinthians2.png")}
        />

        <Image
          resizeMode="cover"
          style={{ width, height: "100%" }}
          source={require("@/assets/images/corinthians2.png")}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  screen: {
    width: "100%",
    height: "90%",
    overflowX: "hidden",
  },
});
