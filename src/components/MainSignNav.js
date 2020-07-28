import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const MainSignNav = ({ navigation }) => {
    return (
        <View style={styles.signInTextContainer}>
            <Text style={styles.textStyle}>Have an account already?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.textButtonStyle}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    signInTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
    textStyle: {
        color: '#4D4C4D',
        fontSize: 14,
        fontFamily: 'NotoSans'
    },
    textButtonStyle: {
        marginLeft: 5,
        color: '#4D4C4D',
        fontSize: 14,
        fontFamily: 'NotoSansBold'
    }
});

export default withNavigation(MainSignNav);
