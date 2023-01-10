import * as React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Alert} from 'react-native'
import {Button, Card, Header} from '@rneui/themed';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Divider } from '@rneui/themed';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {useState} from "react";



export default function NewReq({navigation}){
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
                        style={styles.view3}
                    />

                    <TextInput

                        placeholder={"Description"}
                        multiline={true}
                        numberOfLines={4}
                        style={styles.view3}
                    />
                    <TextInput
                        placeholder={"Proposed cost"}
                        style={styles.view3}
                    />
                    <View style={{flexDirection:"row",padding:10}}>
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
                    <Button
                        title="Location"
                        onPress={  () =>  {
                            navigation.navigate('Maps');
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
                            Alert.alert('Yor service is now under review , check your requests tab ')
                            navigation.navigate('Hp');
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
                    <DateTimePickerModal
                        display={"inline"}
                        style={{backgroundColor:"#333652",height:'80%'}}
                        isVisible= {isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
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