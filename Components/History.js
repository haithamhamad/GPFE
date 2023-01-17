import * as React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, Alert, FlatList} from 'react-native'
import {Button, Card, Dialog, Header} from '@rneui/themed';
import Ionicons from "@expo/vector-icons/Ionicons";
import {useEffect, useState} from "react";
import {AirbnbRating} from "react-native-ratings";
import MyView from "./MyView";
import {useRoute} from "@react-navigation/native";



export default function History({navigation}){


    const route = useRoute()


    const [data, setData] = useState([]);
    const getServices = async () => {
        try {
            const response = await fetch(`http://192.168.1.11:8083/poke/getAllPokes/provider?userName=${route.params.username}`);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        }
    }

    const [stat,setStatus]=useState('')


    useEffect(() => {
        console.log(data.status)
        getServices();
    }, []);










    let status
    let buttonS = false
    let isHiddenPr= true;
    if(stat==="pending"){
        status= <Text style={{fontSize:20,color:"orange"}}>pending</Text>
        console.log("hhhhhhhhhhhh")
        buttonS = false
    }else if(stat==="rejected"){
        status= <Text style={{fontSize:20,color:"red"}}>rejected</Text>
        buttonS = false
    }else if(stat==="accepted"){
        status= <Text style={{fontSize:20,color:"green"}}>Accepted</Text>
        buttonS = false
    }
    else if(stat==="completed"){
        status= <Text style={{fontSize:20,color:"green"}}>Completed</Text>
        buttonS=true;
    }

    let button;
    if (buttonS){
        button="Mark completed"
        isHiddenPr=false;
    }


    return(
        <View >
            <Header
                backgroundColor="#333652"
                centerComponent={{ text: 'History', style: styles.heading }}
                leftComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress ={() =>  {
                            navigation.goBack();
                        }} >
                            <Ionicons name="arrow-back-outline" size={40} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}

                        >
                        </TouchableOpacity>
                    </View>
                }

            />

            <FlatList
                style={{height:'75%'}}
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (


            <Card containerStyle={{borderRadius:15}}>
                <Card.Title style={{fontSize: 40}}>{item.nameOfService}</Card.Title>
                <Card.Divider/>

                <View style={{position:"relative",alignItems:"left"}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:20}}>Name: </Text>
                        <Text style={{fontSize:20}}  >{item.nameOfCustomer}</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:20}}>status: {status}</Text>
                        {setStatus(item.status)}
                    </View>
                    <MyView  hide={isHiddenPr} style={{padding:5,flexDirection:"column"}}>
                        <Button
                            title={button}
                            onPress={()=>{

                            }}
                            buttonStyle={{
                                marginTop:10,
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
                    </MyView>

                </View>
            </Card>

                )}/>
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





})