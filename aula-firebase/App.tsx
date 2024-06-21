import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { db } from "./firebaseConnection";
import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function App() {
  const [nome, setNome] = useState("Carregando....");

  useEffect(() => {
    async function getDados() {
      // const docref = doc(db,"alunos","2");
      // getDoc(docref)
      // .then((snapshot)=>{
      //   //console.log(snapshot.data()?.nome);
      //   setNome(snapshot.data()?.nome);
      // }).catch(()=>{
      //   console.log("Erro !");

      // })

      onSnapshot(doc(db, "alunos", "2"), (doc) => {
        setNome(doc.data()?.nome);
      });
    }
    getDados();
  }, []);

  async function handleRegister() {
    //   await setDoc(doc(db, "alunos", "10"), {
    //     nome: "Carlos",
    //     email: "carlos@gmail.com",
    //     cargo: "Programador",
    //     salario: 15000,
    //   })
    //     .then(() => {
    //       console.log("Cadastro efetuado com sucesso !");
    //     })
    //     .catch(() => {
    //       console.log("Erro !");
    //     });
    // }

    await addDoc(collection(db, "alunos"), {
      nome: "Carlos",
      email: "carlos@gmail.com",
      cargo: "Programador",
      salario: 15000,
    });
  }

  return (
    <View style={styles.container}>
      <Text>{nome}</Text>
      <TouchableOpacity style={styles.botao} onPress={handleRegister}>
        <Text style={styles.botaoTexto}>Adicionar</Text>
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
  botao: {
    backgroundColor: "#000",
  },
  botaoTexto: {
    color: "#fff",
  },
});
