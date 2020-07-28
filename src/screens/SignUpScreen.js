import React, { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { NavigationEvents } from "react-navigation";
import Constants from 'expo-constants';
import MainLogo from '../assets/icons/MainLogo';
import BackButton from '../components/common/BackButton';
import MainSignNav from '../components/MainSignNav';
import MainTermsAndPolicy from '../components/MainTermsAndPolicy';
import MainTitle from '../components/common/MainTitle';
import SignUpForm from '../components/SignUpForm';
import { Context as AuthContext } from "../context/AuthContext";

const SignUpScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView style={styles.scrollView} keyboardShouldPersistTaps={'handled'} >
                <View style={styles.containerView}>
                    <NavigationEvents
                        onWillBlur={clearErrorMessage}
                        onWillFocus={clearErrorMessage}
                    />
                    <BackButton onPress={() => navigation.goBack()} />
                    <MainLogo height={138} />
                    <View style={styles.subContainer}>
                        <MainTitle text="Create your account" />
                        <SignUpForm
                            isLoading={state.isLoading}
                            errorMessage={state.errorMessage}
                            onSubmit={signup}
                        />
                        <MainSignNav />
                    </View>
                    <MainTermsAndPolicy />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

SignUpScreen.navigationOptions = () => {
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
        marginBottom: 120,
    },
});

export default SignUpScreen;
