import * as React from "react";

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Alert,
    FlatList,
    ScrollView
} from 'react-native'
import {Card, Header, Button, Dialog} from '@rneui/themed';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Ionicons from "@expo/vector-icons/Ionicons";
import {useEffect, useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";





function Cards(props){

    const navigation = useNavigation();

    let customer =props.customer;
    let user =props.user

    const confirm=()=>{


    };




    return(
        <View>
            <Card  containerStyle={{borderRadius:15}} >

                <Card.Title style={{fontSize: 40}}>{customer.serviceName}</Card.Title>
                <Card.Divider/>
                <View style={{position:"relative",alignItems:"left"}}>
                    <Text style={{fontWeight:"bold"}}>{customer.username} </Text>
                    {/*<Card.Divider/>*/}
                    {/*<Text > {customer.customerNumber}</Text>*/}
                    {/*<Card.Divider/>*/}
                    {/*<Text > {customer.Date}</Text>*/}
                    {/*<Card.Divider/>*/}
                    <TextInput
                        style={styles.view3}
                        placeholderTextColor={'black'}
                    placeholder={customer.Description}
                    multiline={true}
                    editable={false}
                    >
                    </TextInput>
                    <Card.Divider/>

                    <View style={{flexDirection:"row"}}>

                        <Button
                            onPress={() =>  {
                                navigation.navigate('Map1',{
                                    latitude: customer.latitude,
                                    longitude: customer.longitude,
                                });
                            }}
                            title="Location"
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
                        <Button
                            title="Chat"
                            onPress={() =>  {
                                signInWithEmailAndPassword(auth, user.email, user.password)
                                    .then((userCredential) => {

                                        navigation.navigate('AnotherChat1',{

                                            user1: 'prov1',
                                            user2: 'user2',


                                        });
                                    }).catch((error) => {
                                    const errorCode = error.code;
                                    const errorMessage = error.message;
                                    alert("herrrrrrrrrrr")
                                    alert(errorMessage);
                                });


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


                    </View>
                    <View style={{flexDirection:"row"}}>
                    <Button
                        title="Accept"
                        onPress={confirm}
                        buttonStyle={{
                            backgroundColor: 'green',
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
                    <Button
                        title="Reject"
                        onPress={confirm}
                        buttonStyle={{
                            backgroundColor: 'red',
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
                    </View>


                </View>
            </Card>




        </View>



    )
}




export default function HPP({navigation}){

    const route = useRoute();
    const email = route.params.email
    const password = route.params.password
    const username = route.params.username
    const phoneNum = route.params.phoneNum

    const [data, setData] = useState([]);
    const getServices = async () => {
        try {
            const response = await fetch('http://192.168.1.11:8083/service/getAllServices/provider');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getServices();
    }, []);

    return(
        <View >
            <Header
                backgroundColor="#333652"
                centerComponent={{ text: 'Requests', style: styles.heading }}
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={() =>  {navigation.navigate('NewReqP1',
                            {username:username}
                            )}}>
                            <Ionicons name="add-circle-outline" size={40} color="white" />
                        </TouchableOpacity>

                    </View>
                }
                leftComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity   onPress={() =>  {navigation.navigate('History1',{username:username})}}>
                            <Ionicons name="file-tray-outline" size={40} color="white" />

                        </TouchableOpacity>

                    </View>
                }

            />

            <FlatList
                style={{height:'75%'}}
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Cards
                        customer={{
                            serviceName:item.serviceName,
                            username: item.username,
                            Price:item.price,
                            status:item.status,
                            rating: item.quality,
                            Description:item.description,
                            latitude: item.longtid,
                            longitude: item.lati,

                        }}
                        user={{
                            email:email,
                            password: password


                        }}
                    />
                )}
            />



        </View>


    )



}
const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },

    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },

    view3: {
        display: "flex",
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 20,
        paddingRight:20,
        marginTop: 7,
        borderRadius: 10,
        width:'50%',

        backgroundColor: "rgba(217, 217, 217, 1)",
    },




})