import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");

  function buscarNome(texto) {
    //setNome("Bem Vindo:"+texto);
    texto.length > 0 ? setNome("Bem Vindo:" + texto) : setNome("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        onChangeText={(texto) => buscarNome(texto)}
      />
      <Text style={styles.texto}>{nome}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 2,
    margin: 30,
    padding: 10,
    fontSize: 20,
  },
  texto: {
    textAlign: "center",
    fontSize: 25,
  },
});
