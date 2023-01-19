import * as React from "react";
import {View, StyleSheet, Image, Text, Button, Pressable, TouchableOpacity, Modal, ImageBackground} from "react-native";
import TextAnimator from "./Components/Textanmi";
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import {useState} from "react";



export default function Home({ navigation }) {





    const [modalIsVisible,setModalIsVisible] = useState(false)

    return (

        <View style={styles.view1}>
            <ImageBackground source={require('./assets/maybe.png')} resizeMode="cover" style={styles.image}>
            </ImageBackground>
            <TextAnimator
                content='WELCOME '
                style={styles.view2}
                time = {3000}
                duration={2000}

            />
            <View style={styles.card}>
            <View style={styles.view4}>
                <TouchableOpacity   style={styles.view31}>
                    <Text style={styles.view32}  onPress={() => navigation.navigate('Login1')}>LOG IN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view4}>
                <TouchableOpacity style={styles.view31}>
                    <Text style={styles.view32} onPress={() => navigation.navigate('Signup1')}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view5}>
                <View style={styles.view6}>
                    <Text style={styles.view6}>Become a service provider</Text>
                </View>
                <View style={styles.view7}>
                    <TouchableOpacity   style={styles.view31}>
                        <Text style={styles.view32}  onPress={() => navigation.navigate('JoinUs1')}>JOIN US NOW</Text>
                    </TouchableOpacity>

                </View>
            </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:"white",
        borderRadius:10,
        paddingTop:30,
        height:'50%',
        width:'100%',
        display: "flex",
        flexDirection: "column",
        marginHorizontal:'auto',
        justifyContent: "flex-start",
        alignItems: "center",


    },
    image: {
        flex: 1,
        justifyContent: "center",

        position:"absolute",top:0,left:0, bottom:0,right:0
    },
    view1: {
        width: '100%' ,
        height: '100%',
        display: "flex",
        flexDirection: "column",
        marginHorizontal:'auto',
        justifyContent: "flex-start",
        alignItems: "center",
        //marginTop:150,

        paddingTop: 106,
        paddingRight: 44,
        paddingBottom: 106,
        paddingLeft: 60,
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    view2: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal:'auto',
        justifyContent: "flex-start",
        alignItems: "flex-start",
        color: "#333652",
        fontSize: 48,
        letterSpacing: 0,
        marginBottom:50,
        textAlign: "left",

    },
    view21:{
        display: "flex",
        flexDirection: "row",
        marginHorizontal:'auto',
        justifyContent: "flex-start",
        alignItems: "flex-start",
        color: "#333652",
        fontSize: 20,
        letterSpacing: 0,
        textAlign: "left",



    },
    view31:{
        display: "flex",
        flexDirection: "row",
        marginHorizontal:'auto',
        justifyContent: "flex-start",
        alignItems: "flex-start",


    },
    view32:{
        fontSize: 24,
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
    },
    view4: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal:'auto',
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 5,
        borderRadius: 10,
        paddingTop: 14,
        paddingRight: 13,
        paddingBottom: 14,
        paddingLeft: 13,
        backgroundColor: "#333652",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 24,
        letterSpacing: 0,
        textAlign: "left",

    },
    view5: {
        display: "flex",
        flexDirection: "column",
        marginHorizontal:'auto',
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
        borderRadius: 11,
        paddingTop: 14,
        paddingRight: 18,
        paddingBottom: 14,
        paddingLeft: 18,
        backgroundColor: "#333652",
    },
    view6: {
        marginHorizontal:'auto',
        color: "rgba(255, 255, 255, 1)",
        fontSize: 20,
        letterSpacing: 0,
        textAlign: "left",

    },
    view7: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal:'auto',
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 16,
        borderRadius: 11,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: "#FAD02C",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 32,
        letterSpacing: 0,
        textAlign: "left",
    },
});