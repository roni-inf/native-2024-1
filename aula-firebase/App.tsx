import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { db } from "./firebaseConnection";
import {
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
  addDoc,
  collection,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import UsuariosList from "./components/usuarios";

export default function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [alunos, setAlunos] = useState([]);
  const [isEditing, setIsEditing] = useState("");

  useEffect(() => {
    async function getDados() {
      const usersRef = collection(db, "alunos");
      onSnapshot(usersRef, (snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            email: doc.data().email,
            cargo: doc.data().cargo,
          });
        });
        console.log(lista);
        setAlunos(lista);
      });
      // getDocs(usersRef)
      //   .then((snapshot) => {
      //     let lista = [];
      //     snapshot.forEach((doc) => {
      //       lista.push({
      //         id: doc.id,
      //         nome: doc.data().nome,
      //         email: doc.data().email,
      //         cargo: doc.data().cargo,
      //       });
      //     });
      //     console.log(lista);
      //     setAlunos(lista);
      //   })
      //   .catch(() => {
      //     console.log("Erro!");
      //   });
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

  function editUser(data) {
    setNome(data.nome);
    setEmail(data.email);
    setCargo(data.cargo);
    setIsEditing(data.id);
  }

  async function handleEditUser() {
    const docRef = doc(db, "alunos", isEditing);
    await updateDoc(docRef, {
      nome: nome,
      email: email,
      cargo: cargo,
    });
    setNome("");
    setEmail("");
    setCargo("");
    setIsEditing("");
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

      {isEditing !== "" ? (
        <TouchableOpacity style={styles.button} onPress={handleEditUser}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.labelAlunos}>Alunos:</Text>
      <FlatList
        style={styles.list}
        data={alunos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <UsuariosList data={item} handleEdit={(item) => editUser(item)} />
        )}
      />
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
  labelAlunos: {
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
