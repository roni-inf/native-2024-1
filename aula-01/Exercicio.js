import { View, Text , StyleSheet } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={{ height:60, backgroundColor: "#121212", flexDirection:'row', justifyContent:'space-between' }}>
        <Text style={{color:'#fff'}}>Voltar</Text>
        <Text style={{color:'#fff'}}>Home</Text>
        <Text style={{color:'#fff'}}>Detalhes</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "#ddd" }}>
        <Text>Body</Text>
      </View>

      <View style={{ height:60, backgroundColor: "#121212" }}>
        <Text style={{color:'#fff'}}>Footer</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212",
    },
    header: {
      height: 60,
      backgroundColor: "#121212",
    },
    text: {
      color: "#fff",
    },
});
