import React, {useEffect, useState} from 'react';
import {
    View,
    StyleSheet,
    Text, TouchableOpacity, Dimensions,
} from 'react-native';
import MapView, {AnimatedRegion, Marker} from 'react-native-maps';
import {Header} from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import {useNavigation, useRoute} from "@react-navigation/native";

export default function SetMaps() {





    const navigation = useNavigation();
    const route =useRoute();
    const [long,setLong]=useState(0)
    const [lat,setLat]=useState(0)
    const [flag,setFlag] = useState(false)
    const provider = route.params.provider
    const user = route.params.user
    const number = route.params.number
    const date = route.params.date
    const notes = route.params.notes
    const serviceName=route.params.serviceName
    const id =route.params.id


    const [state,setState]=useState([])
    let json
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    // if(!isEmpty(state)) {
    //     let x = JSON.stringify(state)
    //     console.log(x)
    //     let y = x.substring(5, (x.length - 1))
    //
    //     json = JSON.parse(y)
    //     setLong(json.longitude)
    //     setLat(json.latitude)
    // }

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
            serviceUserName: provider,
            nameOfCustomer: user,
            idOfService:id,
            nameOfService:serviceName,
            longtid: long,
            lati:lat,
            phoneNum:number,
            time:date,
            notes:notes
        })
    };

    const createService=()=>{
        if(flag){
            fetch(
                `http://192.168.1.11:8083/poke/tryToPokeServie`, requestOptions)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson)
                })
                .catch((error) => {

                    console.error(error);


                })}
    }















    return (

        <View style={styles.body}>
            <Header
                backgroundColor="#333652"
                centerComponent={{ text: 'Location', style: styles.heading }}
                leftComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress ={() =>  {
                            navigation.goBack();
                        }}  >
                            <Ionicons name="close-outline" size={35} color="white" />

                        </TouchableOpacity>
                    </View>
                }
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress ={() =>  {
                            setFlag(true)
                            createService()
                        }}  >
                            <Ionicons name="checkmark-outline" size={35} color="white" />

                        </TouchableOpacity>
                    </View>
                }

            />
            <MapView
                style={styles.map}
                initialRegion={{

                latitude: 37.78825,
                longitude: -122.4324,


            }}>

                <Marker draggable
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,

                }}
                         onDragEnd={(e) => setState({ x: e.nativeEvent.coordinate })}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },

});