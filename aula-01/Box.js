import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}/>
      <View style={[styles.box, {alignSelf:'flex-end'}]}/>
      <View style={styles.box}/>
      <View style={styles.box}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems:"flex-start",
    justifyContent: "space-between"
  },
  box: {
    width:100,
    height: 100,
    backgroundColor: "blue",
    margin: 10,
  },
});
