import * as React from "react";
import {View, Text, Image, Pressable, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import { Card } from '@rneui/themed';
import {useEffect, useLayoutEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {database} from "../firebase";
import {Button, Header} from "@rneui/base";
import {useNavigation} from "@react-navigation/native";



export default function Chats(){
    const [chat,setChat]=useState([])
     const navigation =useNavigation();

    useEffect(() => {

        const collectionRef = collection(database, 'prov1');
        const q = query(collectionRef);

        const unsubscribe = onSnapshot(q, querySnapshot => {

            setChat(
                querySnapshot.docs.map(doc => ({
                    user: doc.data().user2,
                    _id: doc.data()._id

                }),
                )
            );
        });
        return unsubscribe;
    }, []);


    return(
<View>
          <Header  backgroundColor="#333652"  centerComponent={{ text: 'Chats', style: styles.heading }} />


    <FlatList
        data={chat}
        renderItem={({ item }) => (
            <View>

            <Card containerStyle={{borderRadius:15}} >
                <View style={{flexDirection:"row",display:"flex"}}>
                <View style={{position:"relative",alignItems:"left",paddingTop:5 ,paddingRight:240}}>
                    <Text  style={{paddingTop:5,fontSize:18,fontWeight:"bold"}}>Saeed</Text>
                    {/*{item.user}*/}
                </View>
                <Button
                    buttonStyle={{borderRadius:15,backgroundColor:'#333652'}}
                    onPress={ ()=>{
                    navigation.navigate('AnotherChat1',
                        {   user1: 'prov1',
                            user2: item.user,
                        })
                }
                } >chat </Button>
                </View>


            </Card>

            </View>

        )}/>



</View>
)





}
const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderBottomColor: '#cacaca',
        borderBottomWidth: 1,
    },
    addUser: {
        flexDirection: 'row',
        padding: 10,
    },
    input: {
        backgroundColor: '#cacaca',
        flex: 1,
        marginRight: 10,
        padding: 10,
    },
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
});