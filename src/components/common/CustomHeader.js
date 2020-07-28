import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import WhiteBackButton from './WhiteBackButton'
import { withNavigation } from "react-navigation";
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

const CustomHeader = ({ navigation }) => {
    const title = navigation.getParam("title");
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
            <WhiteBackButton onPress={() => navigation.goBack()} />
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#FAFAFA",
        height: 50,
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
        height: 50,
        // borderBottomLeftRadius: 25,
        // borderBottomRightRadius: 25,
    },
    titleStyle: {
        flex: 1,
        fontSize: 25,
        fontFamily: 'NotoSansBold',
        marginLeft: 15,
        color: "#FFFFFF"
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        // marginHorizontal: 15,
    },
});

export default withNavigation(CustomHeader);
