import { useGame } from "@/hooks/gameHooks";
import { useEffect } from "react";
import { Easing, Image, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function Dino() {
  const { jumping, stopJump, dinoHeight } = useGame();

  function handlejump() {
    dinoHeight.value = withSequence(
      withTiming(-100, {
        duration: 400,
        easing: Easing.linear,
      }),
      withTiming(0, {
        duration: 400,
        easing: Easing.linear,
      }),
      withTiming(
        0,
        {
          duration: 400,
          easing: Easing.linear,
        },
        () => stopJump(),
      ),
    );
  }

  useEffect(() => {
    if (jumping) {
      handlejump();
    }
  }, [jumping]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: dinoHeight.value,
      },
    ],
  }));

  return (
    <Animated.View style={[s.dino, animatedStyle]}>
      {jumping ? (
        <Image
          source={require("@/assets/images/shaggy-dance.png")}
          resizeMode="contain"
          style={s.image}
        />
      ) : (
        <Image
          source={require("@/assets/images/salsicha.gif")}
          resizeMode="contain"
          style={s.image}
        />
      )}
    </Animated.View>
  );
}

const s = StyleSheet.create({
  dino: {
    width: 80,
    height: 80,
    position: "absolute",
    zIndex: 10,
    top: "41%",
    left: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
