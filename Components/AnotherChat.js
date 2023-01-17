import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback
} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import 'firebase/firestore';
import { auth, database } from '../firebase';
import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { AntDesign } from '@expo/vector-icons';



export default function AnotherChat() {

    const route = useRoute();
    const user1=route.params.user1
    const user2= route.params.user2
    console.log(user2)





    function convertLetterToNumber(str) {
        let out = 0, len = str.length;
        for (let pos = 0; pos < len; pos++) {
            out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
        }
        return out;
    }


    const roomId = convertLetterToNumber(user1) + convertLetterToNumber(user2)
    console.log(roomId)



    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();


    const onSignOut = () => {
        signOut(auth).catch(error => console.log('Error logging out: ', error));
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{
                        marginRight: 10
                    }}
                    onPress={onSignOut}
                >
                    <AntDesign name="logout" size={24}  style={{marginRight: 10}}/>
                </TouchableOpacity>
            )
        });
    }, [navigation]);




     useLayoutEffect(() => {

        const collectionRef = collection(database, roomId.toString());
        const q = query(collectionRef, orderBy('createdAt', 'desc'));



        const unsubscribe = onSnapshot(q, querySnapshot => {

            setMessages(
                querySnapshot.docs.map(doc => ({
                    _id: doc.data()._id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user
                }))
            );

         });

        return unsubscribe;



    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages)
        );
        // setMessages([...messages, ...messages]);
        const { _id, createdAt, text, user } = messages[0];
        addDoc(collection(database, roomId.toString()), {
            _id,
            createdAt,
            text,
            user
        });
    }, []);

    console.log(messages.length)

    setTimeout(function (){
        console.log(messages.length)

        if(messages.length === 0) {

            addDoc(collection(database, user1), {
                _id: roomId,
                user1: user1,
                user2: user2

            });
            addDoc(collection(database, user2), {
                _id: roomId,
                user1: user2,
                user2: user1
            });



    }},3000);










    return (
        // <>
        //   {messages.map(message => (
        //     <Text key={message._id}>{message.text}</Text>
        //   ))}
        // </>
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={false}
            showUserAvatar={false}
            onSend={messages => onSend(messages)}
            messagesContainerStyle={{
                backgroundColor: '#fff'
            }}
            textInputStyle={{
                backgroundColor: '#fff',
                borderRadius: 20,
            }}
            user={{
                _id: auth?.currentUser?.email,

            }}
        />
    );
}