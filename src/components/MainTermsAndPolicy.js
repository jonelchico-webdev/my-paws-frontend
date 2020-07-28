import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation'

const MainTermsAndPolicy = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>By signing in, you agree to the</Text>
            <View style={styles.textContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('TermsOfServices', { title: "Terms of Services" })}>
                    <Text style={styles.textButtonStyle}>Terms of Service</Text>
                </TouchableOpacity>
                <Text style={styles.textStyle}>and</Text>
                <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy', { title: "Privacy Policy" })}>
                    <Text style={styles.textButtonStyle}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        // position: 'absolute',
        // bottom: 20
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textStyle: {
        color: '#4D4C4D',
        fontSize: 14,
        fontFamily: 'NotoSans',
        marginHorizontal: 5,
    },
    textButtonStyle: {
        color: '#4D4C4D',
        fontSize: 14,
        fontFamily: 'NotoSansBold'
    }
});

export default withNavigation(MainTermsAndPolicy);
