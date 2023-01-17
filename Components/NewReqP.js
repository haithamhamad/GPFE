import * as React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Alert} from 'react-native'
import {Button, Card, Header} from '@rneui/themed';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Divider } from '@rneui/themed';
import {useCallback, useEffect, useState} from "react";
import {useRoute} from "@react-navigation/native";
import MapView, {Marker} from "react-native-maps";



export default function NewReqP({navigation}){
    const  route=useRoute()
    const [serviceName,setServiceName]= useState('')
    const [description,setDescription]= useState('')
    const [price,setPrice]=useState(0)
    const [long,setLong]=useState(0)
    const [lat,setLat]=useState(0)
    const [state,setState]=useState([])
    const [flag,setFlag] = useState(false)


    let json
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    useEffect(()=>{
    if(!isEmpty(state)) {
        let x = JSON.stringify(state)
        console.log(x)
        let y = x.substring(5, (x.length - 1))

        json = JSON.parse(y)
        setLong(json.longitude)
        setLat(json.latitude)
    }})
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify( {
            userName: route.params.username,
            serviceName : serviceName,
            description:description,
            price: price,
            longtid: long,
            lati:lat
        })
    };

    const createService=()=>{
    if(flag){
        console.log(route.params.username)
        fetch(
            `http://192.168.1.11:8083/service/createService?userNanme=${route.params.username}`, requestOptions)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('hhhhhhhhhhhh')
                console.log(responseJson)
            })
            .catch((error) => {

                console.error(error);


            })}
    }




    return(
        <View >
            <Header
                backgroundColor="#333652"
                centerComponent={{ text: 'Request new service', style: styles.heading }}
                leftComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity  onPress ={() =>  {
                            navigation.goBack();
                        }}>
                            <Ionicons name="close-outline" size={40} color="white" />

                        </TouchableOpacity>


                    </View>
                }

            />

            <Card>


                <View style={{position:"relative",alignItems:"center"}}>

                    <TextInput
                        placeholder={"Service name"}
                        onChangeText={text => setServiceName(text)}
                        style={styles.view3}
                    />

                    <TextInput

                        placeholder={"Description"}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={text => setDescription(text)}
                        style={styles.view3}
                    />
                    <TextInput
                        placeholder={"cost"}
                        onChangeText={text => setPrice(text)}
                        style={styles.view3}
                    />

                    <Divider
                        style={{ width: "80%", margin: 20 }}
                        color="#333652"
                        insetType="left"
                        subHeaderStyle={{}}
                        width={2}
                        orientation="horizontal"
                    />
                    <Button
                        title="confirm"
                        onPress={  () =>  {

                        setFlag(true)
                            createService()

                        }}
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

                </View>

            </Card>

            <MapView
                style={styles.map}
                initialRegion={{

                    latitude: 37.78825,
                    longitude: -122.4324,


                }}
            >

                <Marker draggable
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,

                        }}
                        onDragEnd={(e) => setState({ x: e.nativeEvent.coordinate })}

                />

            </MapView>







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
        marginTop: 7,
        borderRadius: 10,
        width:'80%',
        backgroundColor: "rgba(217, 217, 217, 1)",
    },

    map: {
        width: '100%',
        height: '60%',
    },



})