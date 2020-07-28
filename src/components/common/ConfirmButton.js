import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
import LinearGradient from 'expo-linear-gradient';

const ConfirmButton = ({ text, onPress, isLoading }) => {
    if (isLoading) {
        return <Button
            titleStyle={styles.buttonText}
            buttonStyle={styles.buttonContainer}
            borderRadius={18}
            loading
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
                colors: ['#486DB5', '#D84B9B'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
            }}
            onPress={onPress}
        />
    } else {
        return <Button
            titleStyle={styles.buttonText}
            buttonStyle={styles.buttonContainer}
            borderRadius={18}
            title={text}
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
                colors: ['#486DB5', '#D84B9B'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
            }}
            onPress={onPress}
        />
    }


};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 200,
        height: 36,
        marginVertical: 5,
        borderRadius: 18,
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 20,
    },
    buttonText: {
        flexGrow: 1,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'NotoSans',
        fontSize: 12
    }
});

export default ConfirmButton;
