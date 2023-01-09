import * as React from "react";
import {View, StyleSheet, Text, TextInput, Modal, Dimensions, TouchableOpacity} from "react-native";
import {Image} from 'react-native' ;


export default function Login() {




    return (
        <View style={styles.view1}>


            <View style={styles.view2}>
                <Text>Name</Text>
            </View>
            <TextInput style={styles.view3} />
            <View style={styles.view2}>
                <Text>E-mail</Text>
            </View>
            <TextInput style={styles.view3} />
            <View style={styles.view4}>
                <Text secureTextEntry={true}>Password</Text>
            </View>
            <TextInput style={styles.view5} />
            <View style={styles.view41}>
                <TouchableOpacity   style={styles.view31}>
                    <Text style={styles.view32}  >Signup</Text>
                </TouchableOpacity>
            </View>
        </View>


    );
}






const styles = StyleSheet.create({

    view1: {
        width: '100%' ,
        height: '100%',
        display: "flex",
        flexDirection: "column",
        marginHorizontal:'auto',
        justifyContent: "flex-start",
        alignItems: "center",

        paddingTop: 106,
        paddingRight: 44,
        paddingBottom: 200,
        paddingLeft: 60,
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    view2: {
        display: "flex",
        flexDirection: "column",
        marginHorizontal:'auto',
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop:10,
        color: "rgba(0, 0, 0, 1)",
        fontSize: 12,
        letterSpacing: 0,
        textAlign: "left",

    },
    view3: {
        display: "flex",
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 20,
        marginTop: 7,
        borderRadius: 10,
        width:'80%',
        backgroundColor: "rgba(217, 217, 217, 1)",
    },
    view4: {
        display: "flex",
        flexDirection: "column",
        marginHorizontal:'auto',
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 7,
        color: "rgba(0, 0, 0, 1)",
        fontSize: 12,
        letterSpacing: 0,
        textAlign: "left",

    },
    view5: {
        display: "flex",
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 20,
        marginTop: 7,
        width:'80%',
        borderRadius: 10,
        backgroundColor: "rgba(217, 217, 217, 1)",
    },
    view6: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 7,
        borderRadius: 10,
        paddingTop: 13,
        //paddingRight: 44,
        paddingBottom: 13,
        paddingLeft: 18,
        backgroundColor: "rgba(1, 22, 39, 1)",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 24,
        letterSpacing: 0,
        textAlign: "center",

    },
    view31:{
        display: "flex",
        flexDirection: "row",
        marginHorizontal:'auto',
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",


    },
    view32:{
        fontSize: 24,
        textAlign: "center",
        alignItems:"center",
        color: "rgba(255, 255, 255, 1)",
    },
    view41: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal:'auto',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        borderRadius: 10,
        paddingTop: 14,
        paddingBottom: 14,
        backgroundColor: "rgba(1, 22, 39, 1)",
        color: "rgba(255, 255, 255, 1)",
        fontSize: 24,


    },
});