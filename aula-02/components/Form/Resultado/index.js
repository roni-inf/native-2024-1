import { View, Text } from "react-native";
import React from "react";

export default function Resultado(props) {
  return (
    <View>
      <Text>{props.mensagemResultado}</Text>
      <Text>{props.resultadoImc}</Text>
    </View>
  );
}
