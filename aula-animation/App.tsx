import { View, Text, Animated, StyleSheet } from "react-native";
import React, { useRef, useEffect } from "react";

export default function App() {
  const larguraAnimada = useRef(new Animated.Value(100)).current;
  const alturaAnimada = useRef(new Animated.Value(150)).current;
  const opacidade = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(larguraAnimada, {
        toValue: 300,
        duration: 4000,
        useNativeDriver: false,
      }),

      Animated.timing(alturaAnimada, {
        toValue: 300,
        duration: 4000,
        useNativeDriver: false,
      }),

      Animated.timing(opacidade, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: larguraAnimada,
          height: alturaAnimada,
          backgroundColor: "#4169e1",
          justifyContent: "center",
          opacity: opacidade,
        }}
      >
        <Text style={styles.title}>Loading......</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
  },
});
