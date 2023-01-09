import * as React from "react";
import {View, StyleSheet, Text, TextInput, Modal, Dimensions, TouchableOpacity} from "react-native";
import SearchBar from "react-native-dynamic-search-bar";


export default  function SearchPage() {
    return (
        <SearchBar
            style={styles.view}
            backgroundColor="#ffff"
            placeholder=""
            onChangeText={(text) => this.filterList(text)}
            onSearchPress={() => console.log("Search Icon is pressed")}
            onClearPress={() => this.filterList("")}

        />
    );
}


const styles = StyleSheet.create({
    view: {
        top:50

    },
});

