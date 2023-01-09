import * as React from "react";
import {View, StyleSheet, Text, TextInput, Modal, Dimensions, TouchableOpacity} from "react-native";
import { Tab, TabView ,Icon } from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import login from "../Components/Login"
import Chats from "../Components/Chats"
import SearchPage from "./SearchPage";
import Home from "../Components/HP"
import Profile from "../Components/Profile"


export default function MH(){


    const Tab = createBottomTabNavigator();
    return(

        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown:false,
            tabBarStyle: {
                paddingTop:12,
                position: "absolute",
                bottom: 25,
                left:20,
                right:20,
                backgroundColor: "#333652",
                borderRadius:15,
                elevation:0,
                height:80,
                zIndex: 1,
                ... styles.shadow
            }
        }}>
            <Tab.Screen  name="Home" component={Home} options={{

                tabBarIcon:({focused})=> (
                <View style={styles.screen}>
                    <Ionicons name="home-outline" size={40} color="white" />
                 </View>
                )
            }}

            />
            <Tab.Screen name="Search" component={SearchPage} options={{
                tabBarIcon:({focused})=> (
                    <View>
                        <Ionicons name="search-outline" size={40} color="white" />
                    </View>
                )
            }} />
            <Tab.Screen name="Chat" component={Chats} options={{
                
                tabBarIcon:({focused})=> (
                    <View>
                        <Ionicons name="chatbox-outline" size={40} color="white" />
                    </View>
                )
            }} />
            <Tab.Screen  name="Profile" component={Profile} options={{

                tabBarIcon:({focused})=> (
                    <View>
                        <Ionicons name="person-circle-outline" size={40} color="white" />
                    </View>
                )
            }} />

        </Tab.Navigator>






    )

}
const styles = StyleSheet.create({
    shadow: {
    shadowColor:"#7f5dfo",
        shadowOffset:{
        width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
    elevation:5



    },

});