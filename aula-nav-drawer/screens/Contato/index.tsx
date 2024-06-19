import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ActionModal from "../../components/ActionModal";

export default function Contato() {
  const [exibirModal, setExibirModal] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Contato</Text>
      <TouchableOpacity
        style={styles.buttton}
        onPress={() => setExibirModal(true)}
      >
        <Text>Abrir</Text>
      </TouchableOpacity>

      <Modal
        visible={exibirModal}
        transparent={true}
        onRequestClose={() => setExibirModal(false)}
      >
        <ActionModal
          handleClose={() => setExibirModal(false)}
          handleInformation={() => alert("Information")}
          handleContact={() => alert("Contact")}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121318",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttton: {
    backgroundColor: "#fff",
    padding: 4,
    marginVertical: 8,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
