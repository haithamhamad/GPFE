import * as React from "react";
import {View, StyleSheet, Text, TextInput, Modal, Dimensions, TouchableOpacity} from "react-native";
import MyView from './MyView';
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import MapView, {Marker, Polygon} from "react-native-maps";

export default  function SearchPage() {
    const [selected, setSelected] = React.useState([]);
            let isHiddenLoc=true;
    let isHiddenPr=true;

    const data = [

        {key:'1', value:'Location'},
        {key:'2', value:'Price'},
        {key:'3', value:'Available'},

    ]
      ;
    function show() {
        if (selected.includes('Location')){
isHiddenLoc=false;
        }

        if (selected.includes('Price')){
             isHiddenPr=false;
        }



    }


    return (
        <View style={{position:"relative",flexDirection:"column",  top:50}}>

    <MultipleSelectList
        setSelected={(val) => setSelected(val)}
        placeholder={"Search by"}
        data={data}
        save="value"
        search={false}
        onSelect={show()}
        label="Categories"
    />
            <View style={{padding:5,flexDirection:"column"}}>
                <Text style={{fontWeight:"bold"}}>Service Name: </Text>
                <TextInput
                    style={styles.view31}
                />
            </View>

                <MyView hide={isHiddenPr} style={{padding:5,flexDirection:"column"}}>
                <Text style={{fontWeight:"bold"}}>No more than: </Text>
                <TextInput
                    style={styles.view3}
                />
                    </MyView>
            <MyView hide={isHiddenLoc} style={{padding:5,flexDirection:"column"}}>
                <MapView
                    style={styles.map}
                    initialRegion={{

                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,

                    }}
                >

                    <Marker draggable
                            coordinate={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421
                            }}
                           // onDragEnd={(e) => setState({ x: e.nativeEvent.coordinate })}

                    />

                </MapView>
            </MyView>





        </View>
    );
}


const styles = StyleSheet.create({
    view: {
        top:50

    },
    view3: {
        display: "flex",
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 20,
        marginTop: 7,
        borderRadius: 10,
        width:'20%',
        backgroundColor: "rgba(217, 217, 217, 1)",
    },
    view31: {
        display: "flex",
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 20,
        marginTop: 7,
        borderRadius: 10,
        width:'50%',
        backgroundColor: "rgba(217, 217, 217, 1)",
    },
    map: {
        width: '100%',
        height: '60%',
    },
});

