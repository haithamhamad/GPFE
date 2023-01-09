import React from 'react';
import {
    View,
    StyleSheet,
    Text, TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Header} from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

export default function Map({route}) {

const {  latitude,longitude, latitudeDelta,longitudeDelta}=route.params;
    const navigation = useNavigation();
    return (
        <View style={styles.body}>
            <Header
                backgroundColor="#333652"
                centerComponent={{ text: 'Location', style: styles.heading }}
                leftComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress ={() =>  {
                            navigation.goBack();
                        }}  >
                            <Ionicons name="close-outline" size={35} color="white" />

                        </TouchableOpacity>
                    </View>
                }

            />
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude:  latitude,
                    longitude: longitude,
                    latitudeDelta:  latitudeDelta,
                    longitudeDelta: longitudeDelta,
                }}
            >  
                <Marker
                 coordinate={{
                     latitude:  latitude,
                     longitude: longitude,
                     latitudeDelta:  latitudeDelta,
                     longitudeDelta: longitudeDelta,

                 }}/>
            
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },

});