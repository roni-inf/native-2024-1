import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Ajuda() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Ajuda</Text>
      <Text>Abrir Drawer</Text>
      <Button
        title="Drawer-Home"
        onPress={() => {
          navigation.jumpTo("Home");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
