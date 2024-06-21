import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { MMKV } from "react-native-mmkv";

export default function App() {
  const storage = new MMKV({ id: "bd" });

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [user, setUser] = useState();

  function handleSave() {
    storage.set("user", JSON.stringify({ nome, email }));
  }

  function fetchUser() {
    const data = storage.getString("user");
    setUser(data ? JSON.parse(data) : {});
  }

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Preencha o nome"
        onChangeText={setNome}
      />

      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Preencha o email"
        onChangeText={setEmail}
      />

      <Button title="Salvar" onPress={handleSave} />
      <Text style={styles.texto}>
        {nome} - {email}
      </Text>
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
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
