import { StyleSheet, Text, View } from 'react-native';
import Home from "./Home"
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import MH from "./Components/MH";
import Chat from "./Components/Chat";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import "./ignoreWarnings";
import {Appp} from "./Components/Login"
import Map from "./Components/Map"
import Maps from "./Components/SetMaps"
import Hp from "./Components/HP"
import Requests from "./Components/Requests"
import NewReq from "./Components/NewReq";

export default function App() {
  const AppStack = createStackNavigator();
  return (

      <NavigationContainer >
        <AppStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
          <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Hp" component={Hp} />
            <AppStack.Screen name="Appp" component={Appp} />
            <AppStack.Screen name="Map" component={Map} />
            <AppStack.Screen name="Maps" component={Maps} />
          <AppStack.Screen name="Login" component={Login} />
            <AppStack.Screen name="Signup" component={Signup} />
            <AppStack.Screen name="Requests" component={Requests} />
            <AppStack.Screen name="MH" component={MH} />
            <AppStack.Screen name="Chat" component={Chat} />
            <AppStack.Screen name="NewReq" component={NewReq} />


        </AppStack.Navigator>

      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

