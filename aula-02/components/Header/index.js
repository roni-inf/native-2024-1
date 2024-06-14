import { View, Text } from "react-native";
import React from "react";
import './style.js';
import styles from "./style.js";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Programa de Saúde - 2024</Text>
    </View>
  );
}
