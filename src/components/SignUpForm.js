import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import MainInputField from './common/MainInputField';
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import ConfirmButton from './common/ConfirmButton';
import { Entypo } from "react-native-vector-icons";

const SignUpForm = ({ onSubmit, errorMessage, isLoading }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hideConfirmPassword, setConfirmHidePassword] = useState(true);


    return (
        <>
            <Card>
                <CardSection>
                    <MainInputField
                        disabled={isLoading}
                        placeholder="FIRST NAME"
                        value={firstName}
                        onChangeText={setFirstName}
                    />

                    <MainInputField
                        disabled={isLoading}
                        placeholder="LAST NAME"
                        value={lastName}
                        onChangeText={setLastName}
                    />
                </CardSection>

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

                <CardSection>
                    <MainInputField
                        disabled={isLoading}
                        placeholder="CONFIRM PASSWORD"
                        rightIcon={
                            confirmPassword ? (
                                hideConfirmPassword ? (
                                    <TouchableOpacity onPress={() => setConfirmHidePassword(false)}>
                                        <Entypo name="eye" style={styles.icon} />
                                    </TouchableOpacity>
                                ) : (
                                        <TouchableOpacity onPress={() => setConfirmHidePassword(true)}>
                                            <Entypo name="eye-with-line" style={styles.icon} />
                                        </TouchableOpacity>
                                    )
                            ) : null
                        }
                        secureTextEntry={hideConfirmPassword}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
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
                text="SIGN UP"
                onPress={() => onSubmit({ firstName, lastName, email, password, confirmPassword })}
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

export default SignUpForm;
