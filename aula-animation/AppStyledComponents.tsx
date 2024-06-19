import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import { ThemeProvider } from "styled-components";

export default function App() {
  const cores = {
    fundo: "#191a24",
    cor: "#f3f34a",
    tamanho: "50px",
  };

  return (
    <ThemeProvider theme={cores}>
      <Home />
    </ThemeProvider>
  );
}
