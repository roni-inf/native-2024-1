import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Home() {
    const navigation = useNavigation();

    function navegar(){
        navigation.navigate("Sobre",{nome:'Carlos',idade:47});
    }

    function navegarDetalhes(){
      navigation.navigate('Detalhes');
    }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Ir para Sobre"
        onPress={navegar}/>

       <Text/>

      <Button
        title="Ir para Detalhes"
        onPress={navegarDetalhes}/>
  
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
