import React from "react";
import { View, StyleSheet, TouchableOpacity, Picker } from "react-native";
// import {  } from 'react-native-elements'

const CustomPicker = ({ children, selectedValue, onValueChange, placeholder }) => {
    return (
        <View style={placeholder ? styles.genderContainer : styles.container}>
            <Picker
                // style={inputContainer}
                // itemStyle={styles.noneSelected}
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                // inputStyle={styles.inputStyle}
                // // autoCapitalize="none"
                // autoCorrect={false}
                // placeholderTextColor="#A1B3D7"
                style={styles.inputContainer}
            // {...props}
            >
                {children}
            </Picker>
        </View>
    )
};

const styles = StyleSheet.create({
    genderContainer: {
        width: 150,
        borderBottomColor: '#486DB5',
        borderBottomWidth: 1,
        marginLeft: 10
    },
    container: {
        flex: 2,
        width: 150,
        borderBottomColor: '#486DB5',
        borderBottomWidth: 1,
        marginRight: 30
    },
    inputContainer: {
        marginHorizontal: -8,
        marginBottom: -10,
        // display: 'flex'
    },
    inputStyle: {
        fontSize: 18,
    },
    noneSelected: {
        color: '#C4C4C4'
    }
});

export default CustomPicker;
