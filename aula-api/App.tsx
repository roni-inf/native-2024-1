import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useState, useRef } from "react";

import api from "./service/api";

export default function App() {
  const [cep, setCep] = useState("");
  const [cepUser, setCepUser] = useState("");
  const inputRef = useRef(null);

  function limpar() {
    setCep("");
  }

  async function buscar() {
    if (cep === "") {
      alert("Preenhca o cep");
      setCep("");
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      Keyboard.dismiss();
    } catch (error) {
      console.log("Error" + error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite o cep:</Text>
        <TextInput
          value={cep}
          style={styles.input}
          placeholder="Ex.25654900"
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#1d75cd" }]}
          onPress={buscar}
        >
          <Text style={styles.botaoText}>Buscar </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#cd331d" }]}
          onPress={limpar}
        >
          <Text style={styles.botaoText}>Limpar </Text>
        </TouchableOpacity>
      </View>
      {cepUser && (
        <View style={styles.resultado}>
        </View>
      )}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
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
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
  },
  botao: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  resultado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 22,
  },
});
