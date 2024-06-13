import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";

export default function App() {
  const alunos = [
    { nome: "Maria", idade: 25 },
    { nome: "Mariana", idade: 19 },
    { nome: "Maria Helena", idade: 45 },
    { nome: "Ana Silvia", idade: 22 },
    { nome: "Igor", idade: 12 },
    { nome: "Sandro", idade: 25 },
    { nome: "Sandraa", idade: 25 },
    { nome: "Sandraaaa", idade: 25 },
    { nome: "Sandraaaaaa", idade: 25 },
    { nome: "Sandraaaaaaa", idade: 25 },
    { nome: "Sandraaaaaaaa", idade: 25 },
  ];

  const render = ({item}) => (
    <View style={styles.aluno}>
      <Text>{item.nome}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.nome}
        renderItem={render}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  aluno: {
    backgroundColor: "gray",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 20,
    alignItems: "center"
  },
});
