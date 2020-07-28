import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from 'react-native-elements'

const MainButton = (props) => {
    return (
        <View style={styles.container}>
            <Input
                inputStyle={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="#A1B3D7"
                inputContainerStyle={styles.inputContainer}
                {...props}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        // borderBottomColor: '#486DB5',
        // borderBottomWidth: 1,
        // paddingBottom: -15
    },
    inputContainer: {
        borderBottomColor: '#486DB5',
        padding: -50,
        marginBottom: -20,
        display: 'flex'
    },
    inputStyle: {
        fontSize: 13,
    }
});

export default MainButton;
