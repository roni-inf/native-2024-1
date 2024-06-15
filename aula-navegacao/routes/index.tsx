import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Sobre from "../screens/Sobre";
import Contato from "../screens/Contato";
import Feather from "react-native-vector-icons/Feather";

import StackRoutes from './stackRoutes';
export default function Routes() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={StackRoutes}
          
          options={{
            tabBarActiveTintColor:'green',
            tabBarInactiveTintColor:'red',
            headerShown:false,  
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />;
            },
            
          }}
        />
        <Tab.Screen name="Sobre" component={Sobre}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="file-text" color={color} size={size} />;
            },
            
          }}
        />
        <Tab.Screen name="Contato" component={Contato}
        
          options={{
            headerShown: false,
            
            tabBarIcon: ({ color, size }) => {
              return <Feather name="phone-call" color={color} size={size} />;
            },
            
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
