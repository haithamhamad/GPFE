import * as React from "react";
import {View, StyleSheet, Text, TextInput, ImageBackground, Dimensions, TouchableOpacity, Alert} from "react-native";
import {useSelector, useDispatch, Provider} from 'react-redux';
import { setName, setPass } from '../redux/actions';
import {Store} from '../redux/store'
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import MyView from "./MyView";
import {Button} from "@rneui/themed";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';






export const Appp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isProv, setIsProv] = useState(true);
    const [Response, setResponse] = useState({});


    const getCustomer = async () => {
        try {
            const response = await fetch(`http://192.168.1.11:8083/user/getCustomer/${email}/${password}`);
            const json = await response.json();
            setResponse(json);
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    navigation.navigate('MH1',{
                        username: json.userName,
                        email: json.email,
                        phoneNum: json.phoneNum,
                        password:json.password
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });

        } catch (error) {
            console.error(error);
        }
    }
    const getProvider = async () => {
        try {
            const response = await fetch(`http://192.168.1.11:8083/provider/getProvider/${email}/${password}`);
            const json = await response.json();
            setResponse(json);
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    navigation.navigate('MHP1',{
                        username: json.userName,
                        email: json.email,
                        phoneNum: json.phoneNum,
                        password:json.password,
                        rating:json.quality,
                        avlbl:json.availability,
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });

        } catch (error) {
            console.error(error);
        }
    }
    const signin = () => {

         if(isProv) getCustomer()
         else getProvider()


    };



    return(

       <View>

           <View style={styles.view1}>
               <ImageBackground source={require('../assets/maybe.png')} resizeMode="cover" style={styles.image}>
               </ImageBackground>
               <View style={styles.card}>
                   <View style={styles.view2}>

                       <Text>E-mail</Text>
                   </View>

                   <TextInput
                       value={email}
                       onChangeText={text => setEmail(text)}
                       style={styles.view3}
                   />
                   <View style={styles.view4}>
                       <Text >Password</Text>
                   </View>
                   <TextInput
                       secureTextEntry={true}
                       value={password}
                       onChangeText={text => setPassword(text)}
                       style={styles.view5} />
                   <Button
                       title="I'm a provider"
                       onPress={  () =>  {
                           setIsProv(false);

                       }}
                       buttonStyle={{
                           backgroundColor: '#333652',
                           borderWidth: 2,
                           borderColor: 'white',
                           borderRadius: 30,
                       }}
                       containerStyle={{
                           width: 80,
                       }}
                       titleStyle={{
                           fontSize: "10",
                           fontWeight: 'bold' }}
                   />
                   {/*<MyView hide={isProv} style={{width:'60%',alignItems:"center"}}>*/}
                   {/*    <Text>Enter your ID :</Text>*/}
                   {/*<TextInput*/}
                   {/*    onChangeText={}*/}
                   {/*    placeholder={"ID"}*/}
                   {/*    style={styles.view3}*/}
                   {/*/></MyView>*/}

                   <View style={styles.view41}>

                       <TouchableOpacity   style={styles.view31}>
                           <Text style={styles.view32}  onPress={() => {
                                    signin()
                               console.log("kkkkkkkkkkk")
                              }} >LOG IN</Text>
                       </TouchableOpacity>

                   </View>

               </View>

           </View>

       </View>
   )

}

export default function Login() {


    return (

        <Provider store={Store}>
            <Appp />
        </Provider>

    );
}






const styles = StyleSheet.create({
   card:{
     backgroundColor:"white",
       borderRadius:20,
       height:'60%',
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