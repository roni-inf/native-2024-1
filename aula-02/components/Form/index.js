import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Resultado from "./Resultado";
import "./style.js";
import styles from "./style.js";

export default function Form() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(0);
  const [mensagemImc, setMensagemImc] = useState("Preencha o peso e a altura");
  const [textButton, setTextButton] = useState("Calcular");

  function calcularImc() {
    return setImc((peso / (altura * altura)).toFixed(2));
  }

  function validacaoImc() {
    if (peso > 0 && altura > 0) {
      calcularImc();
      console.log(imc);
      setPeso("");
      setAltura("");
      setMensagemImc("Seu IMC é:");
      setTextButton("Novo Cálculo");
      return;
    }
    setImc(null);
    setMensagemImc("Calcular");
    setTextButton("Novo Cálculo");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.label}>Altura</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 1.61"
          keyboardType="numeric"
          onChangeText={(text) => setAltura(text)}
          value={altura.toString()}
        />
        <Text style={styles.label}>Peso</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 56"
          keyboardType="numeric"
          onChangeText={(text) => setPeso(text)}
          value={peso.toString()}
        />
        <TouchableOpacity
          title="Cálculo do IMC"
          onPress={() => validacaoImc()}
          style={styles.calculator}
        >
          <Text style={styles.calculatorText}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <Resultado resultadoImc={imc} mensagemResultado={mensagemImc} />
    </View>
  );
}
