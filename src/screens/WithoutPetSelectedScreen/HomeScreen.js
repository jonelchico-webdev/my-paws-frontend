import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import AddButton from '../../components/common/AddButton';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader} >Choose your pet</Text>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
                <Text h1>asd</Text>
            </ScrollView>
            <AddButton onPress={() => navigation.navigate("AddPet")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        paddingVertical: 10
    },
    scrollContainer: {
        marginVertical: 10
    },
    textHeader: {
        fontFamily: 'NotoSansBold',
        color: '#4D4C4D',
        fontSize: 18,
    }
});

export default HomeScreen
