import * as React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Alert} from 'react-native'
import {Button, Card, Header} from '@rneui/themed';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Divider } from '@rneui/themed';
import {useState} from "react";
import MyView from "./MyView";
import {AirbnbRating} from "react-native-ratings";
import {useNavigation} from "@react-navigation/native";



export default function ProfileP({props}){
            const navigation =useNavigation()

    const [edit,setEdit]= useState(false)
    const [name,setName]= useState("ahmad")
    const [mail,setMail]= useState("ahmad@gmail.com")
    const [isHidden,setIsHidden]=useState(true)


    return(
        <View >
            <Header
                backgroundColor="#333652"
                centerComponent={{ text: 'profile', style: styles.heading }}
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={() =>  { setEdit(true)  ; setName('');setMail('')  ;setIsHidden(false)}}>
                            <Ionicons name="create-outline" size={40} color="white" />
                        </TouchableOpacity>


                    </View>
                }

            />

            <Card>


                <View style={{position:"relative",alignItems:"center"}}>
                    <Text style={{fontWeight:"bold"}}>Name</Text>
                    <TextInput
                        editable={edit}
                        placeholder={name}
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
                    <Text style={{fontWeight:"bold"}}>Email</Text>
                    <TextInput
                        editable={edit}
                        placeholder={mail}
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
                    <Text style={{fontWeight:"bold"}}>Phone number</Text>
                    <TextInput

                        editable={edit}
                        secureTextEntry={true}
                        placeholder={""}
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
                    <Text style={{fontWeight:"bold"}}>Your rating</Text>
                    <AirbnbRating
                        defaultRating={'5'}
                        isDisabled
                        showRating={false}
                    />
                    <Divider
                        style={{ width: "80%", margin: 20 }}
                        color="#333652"
                        insetType="left"
                        subHeaderStyle={{}}
                        width={2}
                        orientation="horizontal"
                    />

                    <MyView hide={isHidden}>
                        <Button
                            title="Save"
                            onPress={  () =>  {
                                fetch('https://63be74aae348cb07620f2965.mockapi.io/search', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                    }),
                                });
                                Alert.alert('saved')
                                setIsHidden(true)
                                setEdit(false)
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
                    </MyView>




                    <Button
                        title="LogOut"
                        onPress={  () =>  {
                            Alert.alert('Logged out ')
                            navigation.navigate('Home1');

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