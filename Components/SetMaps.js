import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    Text, TouchableOpacity, Dimensions,
} from 'react-native';
import MapView, {AnimatedRegion, Marker} from 'react-native-maps';
import {Header} from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

export default function SetMaps() {

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
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress ={() =>  {
                            navigation.goBack();
                        }}  >
                            <Ionicons name="checkmark-outline" size={35} color="white" />

                        </TouchableOpacity>
                    </View>
                }

            />
            <MapView
                style={styles.map}
                initialRegion={{

                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,

            }}>

                <Marker draggable
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                }}
                         onDragEnd={(e) => setState({ x: e.nativeEvent.coordinate })}
                />
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