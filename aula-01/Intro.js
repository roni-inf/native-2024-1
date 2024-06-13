import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Aula de React Native</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "yellow",
    padding: 4,
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: 30,
    borderColor: "blue",
    width: 200,
    height: 200,
  },
});
