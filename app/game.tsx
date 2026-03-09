import Dino from "@/components/Dino";
import MovingBackground from "@/components/MovingBackground";
import Obstacle from "@/components/Obstacle";
import Score from "@/components/Score";
import { useGame } from "@/hooks/gameHooks";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

function jump() {}

export default function GameScreen() {
  const { jump } = useGame();
  const [obstacles, setObstacles] = useState<number[]>([]);

  function spawnObstacle() {
    setObstacles((oldValue) => [...oldValue, Date.now()]);
  }
  function removeObstacles(id: number) {
    setObstacles((oldValue: any) =>
      oldValue.filter((obstacle: any) => obstacle !== id),
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      spawnObstacle();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Pressable onPress={jump} style={styles.button}>
      <View style={styles.container}>
        <MovingBackground />
        <Dino />
        <Score />
        {obstacles.map((obstacle: any) => (
          <Obstacle key={obstacle} anEnd={() => removeObstacles(obstacle)} />
        ))}
      </View>
    </Pressable>
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
    height: "80%",
    resizeMode: "contain",
  },
  button: {
    width: "100%",
    height: "100%",
  },
});
