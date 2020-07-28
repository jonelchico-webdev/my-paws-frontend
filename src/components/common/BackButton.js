import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import BackIcon from '../../assets/icons/BackIcon'

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.backButton}>
            <BackIcon width={20} height={20} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        left: 20,
        top: 20
    }
});

export default BackButton;
