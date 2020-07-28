import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import AddColoredIcon from '../../assets/icons/AddColoredIcon';

const PhotoContainer = ({ img, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.viewContainer}>
                {img ? <Image source={{ uri: img }} style={styles.backgroundImage} /> : <AddColoredIcon />}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        backgroundColor: '#F3F3F3',
        borderBottomWidth: 1,
        width: '30%',
        height: '30%',
        borderColor: '#D84B9B',
        borderWidth: 1,
        borderRadius: 10,
    },
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative"
    },
    backgroundImage: {
        flex: 1,
        borderRadius: 9,
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // or 'stretch'
    }
});

export default PhotoContainer;
