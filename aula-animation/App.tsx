import { View, Text, Animated, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef, useEffect } from "react";
import * as Animatable from 'react-native-animatable';

export default function App() {
  const larguraAnimada = useRef(new Animated.Value(0)).current;
  const alturaAnimada = useRef(new Animated.Value(50)).current;

  const ButtonAnimaTable = Animatable.createAnimatableComponent(TouchableOpacity);

  //const opacidade = useRef(new Animated.Value(1)).current;

  //   useEffect(() => {

  //     Animated.loop(
  //     Animated.sequence([
  //       Animated.timing(larguraAnimada, {
  //         toValue: 300,
  //         duration: 4000,
  //         useNativeDriver: false,
  //       }),

  //       Animated.timing(alturaAnimada, {
  //         toValue: 300,
  //         duration: 4000,
  //         useNativeDriver: false,
  //       }),

  //     //   Animated.timing(opacidade, {
  //     //     toValue: 0,
  //     //     duration: 2000,
  //     //     useNativeDriver: false,
  //     //   }),
  //     ])

  //     ).start();
  //   }, []);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(larguraAnimada, {
        toValue: 100,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(alturaAnimada, {
        toValue: 100,
        duration: 3000,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  let porcentagemLargura = larguraAnimada.interpolate({
    inputRange: [50, 100],
    outputRange: ["5%", "100%"],
  });

  let porcentagemAltura = alturaAnimada.interpolate({
    inputRange: [50, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: porcentagemLargura,
          height: porcentagemAltura,
          backgroundColor: "#4169e1",
          justifyContent: "center",
          
          //  opacity: opacidade,
        }}
      >
        <Animatable.Text style={styles.title} animation='shake' duration={5000}>Loading......</Animatable.Text>
        <ButtonAnimaTable animation='shake' style={styles.botao}>
            <Text>Botão Animado</Text>
         </ButtonAnimaTable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
  },
  botao:{
    width:'100%',
    height:30,
    color:'#fff',
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center'
  }
});
