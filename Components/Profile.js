import * as React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet,TextInput} from 'react-native'
import {Card, Header} from '@rneui/themed';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Divider } from '@rneui/themed';



export default function Profile(props){
     let edit=false;

    return(
        <View >
            <Header
                backgroundColor="#333652"
                centerComponent={{ text: 'profile', style: styles.heading }}
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity >
                            <Ionicons name="create-outline" size={40} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginLeft: 10 }}

                        >
                        </TouchableOpacity>
                    </View>
                }

            />

            <Card>


                <View style={{position:"relative",alignItems:"center"}}>

                   <TextInput
                   editable={edit}
                   placeholder={"Ahmad"}
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
                    <TextInput
                        editable={edit}
                        placeholder={"Ahmad@gmail.com"}
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