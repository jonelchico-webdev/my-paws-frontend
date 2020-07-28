import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const MainTitle = ({ text }) => {
    return <Text style={styles.subHeader}>{text}</Text>
};

const styles = StyleSheet.create({
    subHeader: {
        fontFamily: 'NotoSansBold',
        fontSize: 18,
        color: '#4D4C4D',
        marginBottom: 5,
    },
});

export default MainTitle;
