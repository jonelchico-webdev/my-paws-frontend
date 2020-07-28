import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import { Input } from 'react-native-elements';
import MainInputField from './common/MainInputField';
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import ConfirmButton from './common/ConfirmButton';
import { Entypo } from "react-native-vector-icons";

const SignInForm = ({ onSubmit, errorMessage, isLoading }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <>
            <Card>
                <CardSection>
                    <MainInputField
                        disabled={isLoading}
                        placeholder="EMAIL"
                        value={email}
                        onChangeText={setEmail}
                    />
                </CardSection>

                <CardSection>
                    <MainInputField
                        disabled={isLoading}
                        placeholder="PASSWORD"
                        rightIcon={
                            password ? (
                                hidePassword ? (
                                    <TouchableOpacity onPress={() => setHidePassword(false)}>
                                        <Entypo name="eye" style={styles.icon} />
                                    </TouchableOpacity>
                                ) : (
                                        <TouchableOpacity onPress={() => setHidePassword(true)}>
                                            <Entypo name="eye-with-line" style={styles.icon} />
                                        </TouchableOpacity>
                                    )
                            ) : null
                        }
                        secureTextEntry={hidePassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                </CardSection>
                {errorMessage ? (
                    <CardSection>
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                    </CardSection>
                ) : null}
            </Card>
            <ConfirmButton
                isLoading={isLoading}
                text="SIGN IN"
                onPress={() => onSubmit({ email, password })}
            />
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        color: "red",
        flexGrow: 1,
        fontFamily: 'NotoSans',
        textAlign: 'center',
        marginTop: 15
    },
});

export default SignInForm;
