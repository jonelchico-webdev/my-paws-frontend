import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';

const CancelButton = ({ onPress, isLoading }) => {

    return <Button
        titleStyle={styles.buttonText}
        buttonStyle={styles.buttonContainer}
        borderRadius={15}
        title="CANCEL"
        onPress={onPress}
    />
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 100,
        height: 30,
        borderRadius: 18,
        alignItems: 'center',
        backgroundColor: '#848484',
    },
    buttonText: {
        flexGrow: 1,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'NotoSans',
        fontSize: 12
    }
});

export default CancelButton;
