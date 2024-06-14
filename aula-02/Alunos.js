import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [alunos, setAlunos] = useState([
    { id: 1, nome: "José", idade: 25 },
    { id: 2, nome: "José", idade: 25 },
    { id: 3, nome: "José", idade: 25 },
    { id: 4, nome: "José", idade: 25 },
    { id: 5, nome: "José", idade: 25 },
    { id: 6, nome: "José", idade: 25 },
  ]);
  return (
    <View>
      <FlatList
        data={alunos}
        renderItem={({ item }) => <Aluno dados={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  aluno: {
    backgroundColor: "#121212",
    height: 200,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "#fff",
  },
});

function Aluno(props) {
  return (
    <View style={styles.aluno}>
      <Text style={styles.texto}> {props.dados.nome} </Text>
      <Text style={styles.texto}> {props.dados.idade} </Text>
    </View>
  );
}
