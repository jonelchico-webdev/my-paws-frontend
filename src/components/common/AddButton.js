import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
import LinearGradient from 'expo-linear-gradient';
import AddIcon from '../../assets/icons/AddIcon';

const AddButton = ({ onPress }) => {
    return <Button
        icon={<AddIcon width={15} height={15} />}
        titleStyle={styles.buttonText}
        buttonStyle={styles.buttonContainer}
        borderRadius={18}
        title="ADD PET"
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
            colors: ['#486DB5', '#D84B9B'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
        }}
        onPress={onPress}
    />
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 130,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    buttonText: {
        flexGrow: 1,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'NotoSans',
        fontSize: 12,
        marginLeft: 15
    }
});

export default AddButton;
