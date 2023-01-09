import * as React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {Card, Header} from '@rneui/themed';
import Ionicons from "@expo/vector-icons/Ionicons";



export default function Profile(props){


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
                <Card.Title style={{fontSize: 40}}>{"Ahmad"}</Card.Title>
                <Card.Divider/>
                <View style={{position:"relative",alignItems:"center"}}>

                    <Text >Pranshu Chittora</Text>


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