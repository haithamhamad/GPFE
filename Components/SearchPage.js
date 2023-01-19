import * as React from "react";
import {View, StyleSheet, Text, TextInput, Modal, Dimensions, TouchableOpacity, Alert} from "react-native";
import MyView from './MyView';
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import MapView, {Marker, Polygon} from "react-native-maps";
import {useEffect, useState} from "react";
import {Button} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";

export default  function SearchPage(route) {

    const navigation=useNavigation()
    const [Price, setPrice] = useState(0);
    const [Service, setService] = useState('');
    const [avl, setavl] = useState(false);
    const [done, setDone]=useState(false)
    const [long,setLong]=useState(0)
    const [lat,setLat]=useState(0)
    const [flag,setFlag] = useState(false)
    const [datta,setData]=useState([])
    const [state,setState]=useState([])

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
            type: Service,
            price: Price,
            longtid:long,
            lati:lat,
            available: true ,
            quality:5
        })
    };

    const searchService=()=>{
        if(flag){
            fetch(
                `http://192.168.1.11:8083/service/find`, requestOptions)
                .then((response) => response.json())
                .then((responseJson) => {
                    setData(responseJson)

                })
                .catch((error) => {

                    console.error(error);

                })

            setFlag(false)
            navigation.navigate('Results1',{
                data:datta,
            })

        }


    }



    const [selected, setSelected] = React.useState([]);
            let isHiddenLoc=true;
    let isHiddenPr=true;

    const data = [

        {key:'1', value:'Location'},
        {key:'2', value:'Price'},
        {key:'3', value:'Quality'},

    ]
      ;
    function show() {
        if (selected.includes('Location')){
                isHiddenLoc=false;
        }

        if (selected.includes('Price')){
             isHiddenPr=false;
        }

    }


    return (
        <View style={{position:"relative",flexDirection:"column",  top:50}}>

    <MultipleSelectList
        setSelected={(val) => setSelected(val)}
        placeholder={"Search by"}
        data={data}
        save="value"
        search={false}
        onSelect={show()}
        label="Categories"
    />
            <View style={{padding:5,flexDirection:"column"}}>
                <Text style={{fontWeight:"bold"}}>Service Name: </Text>
                <View style={{padding:5,flexDirection:"row"}}>
                <TextInput
                    onChangeText={newText => setService(newText)}
                    style={styles.view31}
                />
                    <Button
                        title="Search"
                        onPress={  () =>  {
                            setFlag(true)
                            searchService()
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
            </View>

                <MyView hide={isHiddenPr} style={{padding:5,flexDirection:"column"}}>
                <Text style={{fontWeight:"bold"}}>No more than: </Text>
                <TextInput
                    onChangeText={newText => setPrice(newText)}
                    style={styles.view3}
                />
                    </MyView>
            <MyView hide={isHiddenLoc} style={{padding:5,flexDirection:"column"}}>
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
            </MyView>





        </View>
    );
}


const styles = StyleSheet.create({
    view: {
        top:50

    },
    view3: {
        display: "flex",
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 20,
        marginTop: 7,
        borderRadius: 10,
        width:'20%',
        backgroundColor: "rgba(217, 217, 217, 1)",
    },
    view31: {
        display: "flex",
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 20,
        marginTop: 7,
        borderRadius: 10,
        width:'50%',
        backgroundColor: "rgba(217, 217, 217, 1)",
    },
    map: {
        width: '100%',
        height: '60%',
    },
});

