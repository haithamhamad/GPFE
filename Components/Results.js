import * as React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions, Alert, FlatList} from 'react-native'
import {Card, Header, Button, Dialog, Divider} from '@rneui/themed';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Ionicons from "@expo/vector-icons/Ionicons";
import {useEffect, useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {auth} from "../firebase";
import {signInWithEmailAndPassword} from "firebase/auth";






export function Cards(props){

    const navigation = useNavigation();
    let service =props.service;
//    let user =props.user
    const [User,setUser]=useState('')
    const [number,setNumber]=useState('')
    const [date,setDate]=useState('')
    const [notes,setNotes]=useState("")
    const isAvailable=true
    let available=true;


    if(isAvailable){
        available=<Text style={{color:"green"}}> Available </Text>;
    }else {
        available=<Text  style={{color:"red"}}>Unavailable </Text>;
    }
    const [visible1, setVisible1] = useState(false);

    const toggleDialog1 = () => {
        setVisible1(!visible1);
    };
    const [visible2, setVisible2] = useState(false);


    const toggleDialog2 = () => {
        setVisible2(!visible2);
    };
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(date)
        hideDatePicker();
    };

    const confirm=()=>{

        Alert.alert("you will receive conformation soon                  " +
            "                            Please set your location");
        toggleDialog2();
        navigation.navigate('Maps1',
            {
                provider:service.ProviderName,
                user: User,
                number:number,
                date:date,
                notes:notes,
                serviceName: service.serviceName,
                id:service.id,
            }

        )


    };



    return(
        <View>
            <Card  containerStyle={{borderRadius:15}} >

                <Card.Title style={{fontSize: 40}}>{service.serviceName}</Card.Title>
                <Card.Divider/>
                <View style={{position:"relative",alignItems:"left"}}>
                    <Text style={{fontWeight:"bold"}}>Name: {service.ProviderName} </Text>
                    <Divider
                        style={{ width: "100%",paddingTop: 15 }}
                        color="#333652"
                        insetType="left"
                        subHeaderStyle={{}}
                        width={1}
                        orientation="horizontal"
                    />
                    <Text style={{fontWeight:"bold",paddingTop:15}}>Price: {service.Price}</Text>
                    <Divider
                        style={{ width: "100%",paddingTop: 15 }}
                        color="#333652"
                        insetType="left"
                        subHeaderStyle={{}}
                        width={1}
                        orientation="horizontal"
                    />
                    <Card.Divider/>
                    {available}
                    <Card.Divider/>
                    <View style={{flexDirection:"row"}}>
                        <Button
                            onPress={toggleDialog1}
                            title="Description"
                            buttonStyle={{
                                backgroundColor: '#333652',
                                borderWidth: 2,
                                borderColor: 'white',
                                borderRadius: 30,
                            }}
                            containerStyle={{
                                width: 85,

                            }}
                            titleStyle={{
                                fontSize: "10",
                                fontWeight: 'bold' }}
                        />
                        <Button
                            onPress={() =>  {
                                console.log('jjjjjj')
                                navigation.navigate('Map1',{
                                    latitude: service.latitude,
                                    longitude: service.longitude,

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
                            title="Book"
                            onPress={toggleDialog2}
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
                                        navigation.navigate('AnotherChat1',{
                                            user1: 'prov1',
                                            user2: 'user2',
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
                    <AirbnbRating
                        defaultRating={service.rating}
                        isDisabled
                        showRating={false}
                    />

                </View>
            </Card>
            <View>
                <Dialog
                    isVisible={visible1}
                    onBackdropPress={toggleDialog1}
                >
                    <Dialog.Title title="Description"/>
                    <Text>{service.Description}</Text>
                </Dialog>

            </View>

            <View>
                <Dialog
                    isVisible={visible2}
                >
                    <View style={{position:"relative",alignItems:"center"}}>
                        <TouchableOpacity onPress ={() =>  {
                            toggleDialog2();
                        }}  >
                            <Ionicons name="close-outline" size={35} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Dialog.Title title="Book"/>
                    <TextInput style={styles.view3} placeholder='Name' onChangeText={text => setUser(text)} placeholderTextColor="black"/>
                    <TextInput style={styles.view3} placeholder='Phone Number' onChangeText={text => setNumber(text)} placeholderTextColor="black"/>
                    <DateTimePickerModal
                        display={"inline"}
                        style={{backgroundColor:"#333652",height:'80%'}}
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <View style={{flexDirection:"column",paddingTop:5}}>
                        <Button
                            title="date"
                            onPress={showDatePicker}
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

                        <TextInput style={styles.view3}  multiline={true}
                                   onChangeText={text => setNotes(text)}
                                   numberOfLines={4} placeholder='Notes' placeholderTextColor="black"/>
                        <Button
                            title="confirm"
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
                    </View>









                </Dialog>

            </View>



        </View>



    )
}




export default function Results({navigation}){
    const route = useRoute();
    const res= route.params.data
    const email = route.params.email
    const password = route.params.password
    const username = route.params.username
    const phoneNum = route.params.phoneNum
    const [data, setData] = useState([]);

    console.log(res)


    return(
        <View >
            <Header
                backgroundColor="#333652"
                centerComponent={{ text: 'Results', style: styles.heading }}
                leftComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity   onPress={() =>  {navigation.goBack()}}>
                            <Ionicons name="arrow-back-outline" size={40} color="white" />

                        </TouchableOpacity>

                    </View>
                }

            />
            <FlatList
                style={{height:'75%'}}
                data={res}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Cards
                        service={{
                            serviceName:item.serviceName,
                            id:item.id,
                            ProviderName: item.userName,
                            Price:item.price,
                            status:item.status,
                            rating: item.quality,
                            Description:item.description,
                            latitude: item.longtid,
                            longitude: item.lati,
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
        marginTop: 7,
        borderRadius: 10,
        width:'80%',
        backgroundColor: "rgba(217, 217, 217, 1)",
    },




})