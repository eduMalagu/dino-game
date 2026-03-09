import cactusBitmap from "@/assets/bitmaps/obestaculo.json";
import dinoMovingBitmap from "@/assets/bitmaps/salsicha.json";
import dinoJumpingBitmap from "@/assets/bitmaps/salsicha_moving.json";

import { useGame } from "@/hooks/gameHooks";
import { useEffect } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Obstacle({ onEnd }: any) {
  const { width } = Dimensions.get("window");
  const offset = useSharedValue(0);
  const { dinoHeight } = useGame();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: -offset.value }],
  }));

  useEffect(() => {
    offset.value = withTiming(
      width,
      { duration: 3000, easing: Easing.linear },
      () => {
        if (onEnd) {
          onEnd();
        }
      },
    );
  }, []);

  useAnimatedReaction(
    () => {
      return offset.value;
    },
    (currentValue) => {
      const cactusPosition = width - Math.round(currentValue);
      const left = Math.max(50, cactusPosition);
      const right = Math.min(80, cactusPosition + 50);
      const top = 0;
      const bottom = Math.max(0, dinoHeight.value);

      if (left < right && top < bottom) {
        return;
      }

      console.log("Collision");
      for (let x = left; x < right; x++) {
        for (let y = bottom; y < top; y++) {
          console.log(x, y);
          const xDino = x - 50;
          const xCactus = x - cactusPosition;
          const yDino = 80 - (y - dinoHeight.value);
          const yCactus = 50 - y;

          const bitmaps =
            dinoHeight.value > 0 ? dinoJumpingBitmap : dinoMovingBitmap;

          if (
            xDino < 80 &&
            yDino < 80 &&
            xCactus < 65 &&
            yCactus < 65 &&
            dinoMovingBitmap[xDino][yDino] &&
            cactusBitmap[xCactus][yCactus]
          ) {
            console.log("Pixel collision");
          }
        }
      }
    },
  );

  return (
    <Animated.View style={[styles.obstacle, animatedStyles]}>
      <Image
        style={styles.image}
        source={require("@/assets/images/obestaculo.webp")}
        resizeMode="contain"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  obstacle: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: "30%",
    top: "45%",
    right: 5,
  },
});
