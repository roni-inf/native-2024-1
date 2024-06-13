import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView horizontal style={styles.scroll}>
        <Text style={styles.container}>Exemplo 1</Text>
        <Text style={styles.container}>Exemplo 2</Text>
        <Text style={styles.container}>Exemplo 3</Text>
        <Text style={styles.container}>Exemplo 4</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "red",
    fontSize: 28,
  },
  scroll: {
    backgroundColor: "gray",
    height: 120,
  },
});
