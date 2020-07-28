import React, { useContext } from "react";
import { StyleSheet, View } from 'react-native';
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../../context/AuthContext";

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text>Account</Text>
            <Button title="Sign Out" onPress={signout} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AccountScreen
