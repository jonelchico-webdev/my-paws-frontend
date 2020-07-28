import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import WhiteBackIcon from '../../assets/icons/WhiteBackIcon'

const WhiteBackButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.backButton}>
            <WhiteBackIcon width={20} height={20} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
});

export default WhiteBackButton;
