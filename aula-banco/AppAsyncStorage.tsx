import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    async function loadData() {
      await AsyncStorage.getItem("@nome").then((value) => {
        setNome(value);
      });
      loadData();
    }
  }, []);

  async function gravarNome() {
    await AsyncStorage.setItem("@nome", input);
    setNome(input);
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(texto) => setInput(texto)}
        ></TextInput>
        <TouchableOpacity onPress={gravarNome}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Text>{nome}</Text>
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
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
});
