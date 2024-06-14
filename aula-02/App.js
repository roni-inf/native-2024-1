import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    paddingTop: 90,
  },
});

