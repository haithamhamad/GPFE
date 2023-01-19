import * as React from "react";
import {View, StyleSheet, Text, TextInput, Modal, Dimensions, TouchableOpacity} from "react-native";
import { Tab, TabView ,Icon } from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Chats from "../Components/Chats"
import SearchPage from "./SearchPage";
import home from "../Components/HPP"
import ProfileP from "./ProfileP"
import {useRoute} from "@react-navigation/native";



export default function MHP(){
    const route = useRoute();
    const email = route.params.email
    const phoneNum = route.params.phoneNum
    const username = route.params.username
    const password = route.params.password
    const rating = route.params.rating




    const tab = createBottomTabNavigator();
    return(

        <tab.Navigator screenOptions={{
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
            <tab.Screen  name="home" component={home} initialParams={{email,password,username}} options={{

                tabBarIcon:({focused})=> (
                    <View style={styles.screen}>
                        <Ionicons name="home-outline" size={40} color="white" />
                    </View>
                )
            }}

            />
            {/*<tab.Screen name="Search" component={SearchPage} options={{*/}
            {/*    tabBarIcon:({focused})=> (*/}
            {/*        <View>*/}
            {/*            <Ionicons name="search-outline" size={40} color="white" />*/}
            {/*        </View>*/}
            {/*    )*/}
            {/*}} />*/}
            <tab.Screen name="Chats" component={Chats} initialParams={{username:username}} options={{

                tabBarIcon:({focused})=> (
                    <View>
                        <Ionicons name="chatbox-outline" size={40} color="white" />
                    </View>
                )
            }} />
            <tab.Screen  name="ProfileP" component={ProfileP}  initialParams={{username:username,email:email,phoneNum:phoneNum,rating:rating}} options={{

                tabBarIcon:({focused})=> (
                    <View>
                        <Ionicons name="person-circle-outline" size={40} color="white" />
                    </View>
                )
            }} />

        </tab.Navigator>






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