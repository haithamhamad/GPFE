import * as React from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Modal,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    Alert
} from "react-native";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {useEffect, useRef, useState} from "react";
import PhoneInput from "react-native-phone-number-input";
import {useNavigation} from "@react-navigation/native";

export default function Signup() {
    const navigation= useNavigation()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [value, setValue] = useState("");

    const [response, setResponse] = useState(false);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName:name,
            email : email,
            phoneNum: value,
            password: password

        })
    };



    const sendSignup = ()=>{
        fetch(
            'http://192.168.1.11:8083/user/createCustomer/',requestOptions )
            .then(response => {
                response.json()
                    .then(data => {
                        setResponse(data)
                    });
            })
        if(response) {
            Alert.alert("Completed, please login!")
            navigation.navigate('Home1')
        }

    }









    const [fl,setFl]=useState(false)

        const onHandleSignup = () => {
            if (email !== '' && password !== '') {
                createUserWithEmailAndPassword(auth, email, password)
                    .then(() => Alert.alert('Signup success'))
                    .catch((err) => console.log("Login error", err.message));
            }


    }


    return (

    <View>

        <View style={styles.view1}>
            <ImageBackground source={require('../assets/maybe.png')} resizeMode="cover" style={styles.image}>
            </ImageBackground>

            <View style={styles.card}>
                <View style={styles.view2}>

                    <Text>Name</Text>
                </View>

                <TextInput
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.view3}
                />
                <View style={styles.view2}>

                    <Text>E-mail</Text>
                </View>

                <TextInput
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.view3}
                />
                <View style={styles.view2}>

                    <Text>Phone Number</Text>
                </View>

                <PhoneInput
                   // ref={phoneInput}
                    containerStyle={{width:'90%',borderRadius:10,paddingTop:5}}
                    defaultValue={value}
                    defaultCode="PS"
                    layout="first"
                    onChangeText={(text) => {
                        setValue(text);
                    }}

                    withDarkTheme


                />


                <View style={styles.view4}>
                    <Text >Password</Text>
                </View>
                <TextInput
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.view5} />


                <View style={styles.view41}>

                    <TouchableOpacity   style={styles.view31}>
                        <Text style={styles.view32}  onPress={() => {
                            onHandleSignup()

                            sendSignup();

                          }} >Sign Up</Text>
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
        borderRadius:20,
        height:'80%',
        width:'100%',
        display: "flex",
        flexDirection: "column",
        marginHorizontal:'auto',
        justifyContent: "center",
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
        marginHorizontal:'auto',
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 106,
        paddingRight: 44,
        paddingBottom: 200,
        paddingLeft: 60,
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    href:{
        paddingTop:5,
        left:0,
        display: "flex",
        alignItems: "flex-start"

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
        backgroundColor: "FCE38A",
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
        fontSize: 20,
        textAlign: "center",
        alignItems:"center",
        color: "white",
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
        backgroundColor: "#333652",
        color: "rgba(255, 255, 255, 1)",
        width:'30%'


    },

});