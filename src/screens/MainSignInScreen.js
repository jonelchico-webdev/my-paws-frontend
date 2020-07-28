import React, { useContext } from "react";
import { View, StyleSheet, Scrol } from "react-native";
import { SafeAreaView } from "react-navigation";
import Constants from 'expo-constants';
import MainLogo from '../assets/icons/MainLogo';
import ProfileIcon from '../assets/icons/ProfileIcon';
import FacebookIcon from '../assets/icons/FacebookIcon';
import GoogleIcon from '../assets/icons/GoogleIcon';
import MainButton from '../components/common/MainButton';
import MainSignNav from '../components/MainSignNav';
import MainTermsAndPolicy from '../components/MainTermsAndPolicy';
import MainTitle from '../components/common/MainTitle';
import { Context as AuthContext } from "../context/AuthContext";

const MainSignInScreen = ({ navigation }) => {
    const { state, signupwithgoogle, signupwithfacebook, clearErrorMessage } = useContext(AuthContext);



    return (
        <SafeAreaView style={styles.container}  >
            <View style={styles.containerView}>
                <MainLogo height={138} />
                <View style={styles.subContainer}>
                    <MainTitle text="Find partner for your pets" />
                    <MainButton
                        icon={<ProfileIcon width={15} height={15} />}
                        text="CREATE AN ACCOUNT"
                        onPress={() => navigation.navigate("SignUp")}
                    />
                    <MainButton
                        icon={<FacebookIcon width={15} height={15} />}
                        text="CONTINUE WITH FACEBOOK"
                        onPress={() => signupwithfacebook()}
                    />
                    <MainButton
                        icon={<GoogleIcon width={15} height={15} />}
                        text="CONTINUE WITH GOOGLE"
                        onPress={() => signupwithgoogle()}
                    />
                    <MainSignNav />
                </View>
                <MainTermsAndPolicy />
            </View>
        </SafeAreaView>
    );
};

MainSignInScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        backgroundColor: '#FAFAFA',
        minHeight: '100%'
    },
    containerView: {
        backgroundColor: '#FAFAFA',
        minHeight: '100%',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 10,
        position: 'relative'
    },
    subContainer: {
        alignItems: 'center',
        marginTop: 65,
        marginBottom: 210,
    },
});

export default MainSignInScreen;
