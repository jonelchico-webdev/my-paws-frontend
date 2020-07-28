import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const MainButton = ({ icon, text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                {icon}
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 36,
        marginVertical: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        borderColor: '#486DB5',
        borderWidth: 1,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        elevation: 3
    },
    buttonText: {
        paddingLeft: 10,
        flexGrow: 1,
        textAlign: 'center',
        color: '#486DB5',
        fontFamily: 'NotoSans'
    }
});

export default MainButton;
