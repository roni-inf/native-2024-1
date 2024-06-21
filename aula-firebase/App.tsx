import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
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
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");

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
    await addDoc(collection(db, "alunos"), {
      nome: nome,
      email: email,
      cargo: cargo,
    })
      .then(() => {
        console.log("CADASTRADO COM SUCESSO");
        setNome("");
        setEmail("");
        setCargo("");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome..."
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email..."
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label}>Cargo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o seu cargo..."
        value={cargo}
        onChangeText={(text) => setCargo(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  button: {
    backgroundColor: "#000",
    marginLeft: 8,
    marginRight: 8,
  },
  buttonText: {
    padding: 8,
    color: "#FFF",
    textAlign: "center",
  },
  label: {
    color: "#000",
    fontSize: 18,
    marginBottom: 4,
    marginLeft: 8,
  },
  labelUsuarios: {
    marginTop: 14,
    marginLeft: 8,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  list: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
});
