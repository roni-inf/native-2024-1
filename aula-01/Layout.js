import { View, Text } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={{ height:60, backgroundColor: "#121212" }}>
        <Text style={{color:'#fff'}}>Header</Text>
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
