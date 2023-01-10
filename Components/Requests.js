import * as React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, Alert} from 'react-native'
import {Button, Card, Dialog, Header} from '@rneui/themed';
import Ionicons from "@expo/vector-icons/Ionicons";
import {useState} from "react";
import {AirbnbRating} from "react-native-ratings";
import MyView from "./MyView";



export default function Requests({navigation}){
    let isAccepted=0
    let status;
    let buttonS = false
    let isHiddenPr= true;
    if(isAccepted===1){
        status=<Text style={{color:"orange"}}> Pending </Text>;
        buttonS = false
    }else if(isAccepted===0){
        status=<Text  style={{color:"red"}}>Rejected </Text>;
        buttonS = false
    }else if(isAccepted===2){
        status=<Text  style={{color:"green"}}> Accepted </Text>;
        buttonS = false
    }
    else if(isAccepted===3){
        status=<Text  style={{color:"green"}}> Completed </Text>;
        buttonS=true;
    }
    else if(isAccepted===4){
        status=<Text  style={{color:"red"}}> Canceled </Text>;
        buttonS=true;
    }

    let button;
    if (buttonS){
        button="Rate"
    }else button="cancel"

    const [visible1, setVisible1] = useState(false);

    const toggleDialog1 = () => {
        setVisible1(!visible1);
    };


    const show=()=>{
        isHiddenPr=false;

    }


    return(
        <View >
            <Header
                backgroundColor="#333652"
                centerComponent={{ text: 'Your requests', style: styles.heading }}
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

            <Card containerStyle={{borderRadius:15}}>
                <Card.Title style={{fontSize: 40}}>{"Elderly nurse"}</Card.Title>
                <Card.Divider/>

                    <View style={{position:"relative",alignItems:"left"}}>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:20}}>status:</Text>
                            <Text style={{fontSize:20}}>{status}</Text>
                        </View>
                        <MyView  hide={isHiddenPr} style={{padding:5,flexDirection:"column"}}>
                            <Text style={{fontSize:20,color:"red"}}>CANCELED</Text>
                        </MyView>
                        <Button
                            title={button}
                            onPress={()=>{
                                if(buttonS){
                                    toggleDialog1()
                                }else {
                                    if(isAccepted===2){
                                        Alert.alert('you cant cancel an accepted service')

                                    }else {
                                      Alert.alert("CANCELED")
                                    }
                                }
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

                        <Dialog
                            isVisible={visible1}
                            onBackdropPress={toggleDialog1}
                        >
                            <Dialog.Title title="Rate"/>
                            <AirbnbRating
                            />


                        </Dialog>

                </View>
            </Card>









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