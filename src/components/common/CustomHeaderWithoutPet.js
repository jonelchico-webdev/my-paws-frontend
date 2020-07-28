import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

const CustomHeaderWithoutPet = ({ navigation }) => {
    const routeName = navigation.state.routeName

    const title = routeName === "Home" ? "My Pets" : routeName === "Message" ? "My Pets - Messages" : routeName === "Explore" ? "My Pets - Explore" : null

    return (
        <View style={styles.backgroundStyle}>
            <LinearGradient
                // colors={['rgba(0,0,0,0.8)', 'transparent']} D84B9B
                colors={['#D84B9B', '#486DB5']}
                start={[0, 0.5]}
                end={[1, 0.5]}
                // start: { x: 0, y: 0.5 },
                // end: { x: 1, y: 0.5 },
                style={styles.linearStyle}
            />
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#FAFAFA",
        height: 60,
        // borderBottomLeftRadius: 25,
        // borderBottomRightRadius: 25,
        // borderRadius: 5,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    linearStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 60,
        // borderBottomLeftRadius: 25,
        // borderBottomRightRadius: 25,
    },
    titleStyle: {
        flex: 1,
        fontSize: 20,
        fontFamily: 'NotoSansBold',
        color: "#FFFFFF",
        textAlign: 'center'
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        // marginHorizontal: 15,
    },
});

export default withNavigation(CustomHeaderWithoutPet);
