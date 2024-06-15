import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Detalhes from "../screens/Detalhes";
import Contato from "../screens/Contato";
import Sobre from "../screens/Sobre";
export default function StackRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Tela de Home Stack",
          headerTintColor: "green",
        }}
      />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="Contato" component={Contato} />
    </Stack.Navigator>
  );
}
