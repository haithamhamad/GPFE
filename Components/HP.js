import * as React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions, Alert} from 'react-native'
import {Card, Header, Button, Dialog} from '@rneui/themed';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Ionicons from "@expo/vector-icons/Ionicons";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";





function Cards(props){
    const navigation = useNavigation();
    let service =props.service;
    const isAvailable=service.status
    let available;
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
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    const confirm=()=>{

      Alert.alert("you will receive conformation soon                  " +
          "                            Please set your location");
        toggleDialog2();
        navigation.navigate('Maps')
        //HOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOON

    };




    return(
    <View>
    <Card  containerStyle={{borderRadius:15}} >

        <Card.Title style={{fontSize: 40}}>{service.serviceName}</Card.Title>
        <Card.Divider/>
        <View style={{position:"relative",alignItems:"left"}}>
            <Text style={{fontWeight:"bold"}}>{service.ProviderName} </Text>
            <Text > {service.Price}</Text>
            {available}
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
                        navigation.navigate('Map',{
                            latitude: service.latitude,
                            longitude: service.longitude,
                            latitudeDelta: service.latitudeDelta,
                            longitudeDelta: service.longitudeDelta,

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
                    onPress={() =>  {navigation.navigate('Chat')}}
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
                <View style={{position:"relativeS",alignItems:"center"}}>
                <TouchableOpacity onPress ={() =>  {
                    toggleDialog2();
                }}  >
                    <Ionicons name="close-outline" size={35} color="black" />
                </TouchableOpacity>
                </View>
                <Dialog.Title title="Book"/>
                <TextInput style={styles.view3} placeholder='Name' placeholderTextColor="black"/>
                <TextInput style={styles.view3} placeholder='Phone Number' placeholderTextColor="black"/>
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
                {/*<Button*/}
                {/*    title="location"*/}
                {/*    onPress={() =>  {*/}
                {/*        navigation.navigate('Maps')*/}
                {/*    } }*/}
                {/*    buttonStyle={{*/}
                {/*        backgroundColor: '#333652',*/}
                {/*        borderWidth: 2,*/}
                {/*        borderColor: 'white',*/}
                {/*        borderRadius: 30,*/}
                {/*    }}*/}
                {/*    containerStyle={{*/}
                {/*        width: 80,*/}
                {/*    }}*/}
                {/*    titleStyle={{*/}
                {/*        fontSize: "10",*/}
                {/*        fontWeight: 'bold' }}*/}
                {/*/>*/}
                    <TextInput style={styles.view3}  multiline={true}
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




export default function HP(){

    return(
<View >
    <Header
        backgroundColor="#333652"
        centerComponent={{ text: 'Explore', style: styles.heading }}
        rightComponent={
            <View style={styles.headerRight}>
                <TouchableOpacity >
                    <Ionicons name="add-circle-outline" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginLeft: 10 }}

                >
                </TouchableOpacity>
            </View>
        }
        leftComponent={
            <View style={styles.headerRight}>
                <TouchableOpacity >
                    <Ionicons name="file-tray-outline" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginLeft: 10 }}

                >
                </TouchableOpacity>
            </View>
        }

    />
    <Cards
    service={{
        serviceName:"elderly nurse",
        ProviderName: "Ahmad",
        Price:"50",
        status:true,
        rating:"3",
        Description:"blah blah blah",
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,

    }}
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