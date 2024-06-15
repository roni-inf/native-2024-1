import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Sobre({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Tela de Sobre</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.idade}</Text>
      <Button title="Ir para Contato" onPress={()=>navigation.navigate('Contato')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
