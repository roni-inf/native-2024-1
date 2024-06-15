import { StackActions, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Contato() {
const navigation = useNavigation();

function handleHome(){
  navigation.dispatch(StackActions.popToTop);
}

  return (
    <View style={styles.container}>
      <Text>Contato</Text>
      <Text/>
      <Button title="Ir para Sobre" onPress={()=>navigation.goBack()}/>
      <Text/>
      <Button title="Home" onPress={handleHome}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });