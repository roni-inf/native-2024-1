import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Ajuda from "../screens/Ajuda";
import Contato from "../screens/Contato";
import Sobre from "../screens/Sobre";
import CustomDrawer from "../components/CustomDrawer";

export default function Routes() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveBackgroundColor: "#00dae5",
        drawerInactiveBackgroundColor: "#fafaf2",
        drawerInactiveTintColor: "#ff0000",
        drawerActiveTintColor: "#00ff",
        drawerStyle: {
          backgroundColor: "#fafaf2",
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} options={{drawerLabel:'Início'}} />
      <Drawer.Screen name="Ajuda" component={Ajuda} />
      <Drawer.Screen name="Contato" component={Contato} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
}
