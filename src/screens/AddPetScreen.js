import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-navigation";
import Constants from 'expo-constants';
import { Dimensions } from "react-native";
import { Input } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import PhotoContainer from '../components/common/PhotoContainer';
import AddPetForm from '../components/AddPetForm';
import SaveButton from '../components/common/SaveButton';
import CancelButton from '../components/common/CancelButton';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const AddPetScreen = ({ navigation }) => {

    const [photos, setPhotos] = useState([null, null, null, null, null, null, null, null, null])

    const handlePhotoChange = async (index) => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [3, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                let newPhotos = [...photos]
                newPhotos[index] = result.uri
                setPhotos(newPhotos)
            }
        } catch (E) {
            console.log(E);
        }
        // console.log(index)
    }

    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    useEffect(() => {
        getPermissionAsync()
    }, [])

    const Photos = () => photos.map((img, index) => <PhotoContainer img={img} key={index} onPress={() => handlePhotoChange(index)} />)

    return (
        <SafeAreaView style={styles.container}  >
            <ScrollView style={styles.scrollView} keyboardShouldPersistTaps={'handled'} >
                <View style={styles.photoContainer}>
                    <Photos />
                </View>
                <View style={styles.aboutMeContainer}>
                    <AddPetForm />
                </View>
                <View style={styles.saveContainer}>
                    <CancelButton onPress={() => navigation.navigate("mainWithoutPetFlow")} />
                    <SaveButton />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    // root: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     backgroundColor: '#fff',
    // },
    scrollView: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    photoContainer: {
        height: screenHeight * .50,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 15
    },
    aboutMeContainer: {
        height: screenHeight * .40,
        paddingHorizontal: 20
    },
    saveContainer: {
        height: screenHeight * .065,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: screenWidth * .2,
        marginTop: -10
    },
    photos: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: 'orange',
    }

});

export default AddPetScreen
