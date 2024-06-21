import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { db } from "../firebaseConnection";
import { deleteDoc, doc } from "firebase/firestore";

export default function UsuariosList({ data, handleEdit }) {
  async function handleDeleteItem() {
    const docRef = doc(db, "alunos", data.id);
    await deleteDoc(docRef);
  }

  function handleEditUser() {
    handleEdit(data);
  }

  return (
    <View style={styles.container}>
      <Text>Nome:{data.nome}</Text>
      <Text>Email:{data.email}</Text>
      <Text>Cargo:{data.cargo}</Text>

      <View style={styles.buttonContainer}>
        
        <TouchableOpacity style={styles.buttonExcluir} onPress={handleDeleteItem}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonEdit} onPress={handleEditUser}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f0f0f0",
      padding: 8,
      borderRadius: 4,
      marginBottom: 14,
    },
    item: {
      color: "#000",
      fontSize: 16,
    },
    buttonContainer: {
      flexDirection: "row",
    },
    buttonExcluir: {
      backgroundColor: "#B3261E",
      padding: 4,
      borderRadius: 6,
      marginTop: 16,
      marginRight: 8,
    },
    buttonText: {
      color: "#FFF",
      paddingLeft: 8,
      paddingRight: 8,
    },
    buttonEdit: {
      backgroundColor: "#000",
      alignSelf: "flex-start",
      padding: 4,
      borderRadius: 4,
      marginTop: 16,
    },
  });
  