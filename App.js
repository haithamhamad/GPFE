import { StyleSheet, Text, View } from 'react-native';
import Home from "./Home"
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import MH from "./Components/MH";
import MHP from "./Components/MHP";
import Pcalendar from "./Components/Pcalendar"
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Appp} from "./Components/Login"
import Map from "./Components/Map"
import Maps from "./Components/SetMaps"
import Hp from "./Components/HP"
import Requests from "./Components/Requests"
import NewReq from "./Components/NewReq";
import History from "./Components/History";
import NewChat from './Components/NewChat'
import AnotherChat from "./Components/AnotherChat";
import JoinUs from "./Components/JoinUs";
import NewReqP from "./Components/NewReqP";
import Results from "./Components/Results";



export default function App() {

  const AppStack = createStackNavigator();
  return (

      <NavigationContainer >
        <AppStack.Navigator initialRouteName="Home1" screenOptions={{ headerShown: false }} >
          <AppStack.Screen name="Home1" component={Home}  />
            <AppStack.Screen name="Hp1" component={Hp} />
            <AppStack.Screen name="Appp1" component={Appp} />
            <AppStack.Screen name="Map1" component={Map} />
            <AppStack.Screen name="Maps1" component={Maps} />
          <AppStack.Screen name="Login1" component={Login} />
            <AppStack.Screen name="Signup1" component={Signup} />
            <AppStack.Screen name="Requests1" component={Requests} />
            <AppStack.Screen name="MH1" component={MH} options={{gestureEnabled: false}}/>
            <AppStack.Screen name="MHP1" component={MHP} options={{gestureEnabled: false}}/>
            <AppStack.Screen name="Pcalendar1" component={Pcalendar} />
            <AppStack.Screen name="NewReq1" component={NewReq} />
            <AppStack.Screen name="History1" component={History} />
            <AppStack.Screen name="NewChat1" component={NewChat} />
          <AppStack.Screen name="AnotherChat1" component={AnotherChat} />
          <AppStack.Screen name="JoinUs1" component={JoinUs} />
          <AppStack.Screen name="NewReqP1" component={NewReqP} />
          <AppStack.Screen name="Results1" component={Results} />



        </AppStack.Navigator>

      </NavigationContainer>
  );
}



