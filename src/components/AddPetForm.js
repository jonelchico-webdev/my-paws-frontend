import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Picker } from "react-native";
import { Text, Input } from 'react-native-elements';
import CustomPicker from './common/CustomPicker';
import PetNameField from './common/PetNameField';
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import BorderLine from './common/BorderLine';
import ConfirmButton from './common/ConfirmButton';
import { Entypo } from "react-native-vector-icons";

const AddPetForm = ({ onSubmit, errorMessage, isLoading }) => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState(null);
    const [type, setType] = useState(null);
    const [breed, setBreed] = useState(null);
    const [birthDate, setBirthDate] = useState(null);

    return (
        <>
            <View style={{ paddingHorizontal: 20 }}>
                <Card>

                    <CardSection>
                        <PetNameField
                            disabled={isLoading}
                            placeholder="Pet Name"
                            value={name}
                            onChangeText={setName}
                        />
                    </CardSection>

                    <CardSection>
                        <CustomPicker
                            // default
                            selectedValue={gender}
                            placeholder="Select Gender"
                            onValueChange={(itemValue) => !itemValue ? setGender(gender) : setGender(itemValue)}
                        >
                            <Picker.Item enabled={false} color='grey' label="Select Gender" value={null} />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                        </CustomPicker>
                    </CardSection>
                </Card>
            </View>

            <BorderLine />

            <View style={{ paddingHorizontal: 30 }}>

                <Card>
                    <CardSection>
                        <Text style={styles.aboutMeStyle}>About Me</Text>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.labelStyle}>Type:</Text>
                        <CustomPicker
                            // default
                            selectedValue={type}
                            onValueChange={(itemValue) => !itemValue ? setType(type) : setType(itemValue)}
                        >
                            <Picker.Item enabled={false} color='grey' label="Please select..." value={null} />
                            <Picker.Item label="Dog" value="Dog" />
                            <Picker.Item label="Cat" value="Cat" />
                        </CustomPicker>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.labelStyle}>Breed:</Text>
                        <CustomPicker
                            // default
                            selectedValue={gender}
                            onValueChange={(itemValue) => !itemValue ? setGender(gender) : setGender(itemValue)}
                        >
                            <Picker.Item enabled={false} color='grey' label="Please select..." value={null} />
                        </CustomPicker>
                    </CardSection>

                    <CardSection>
                        <Text style={styles.labelStyle}>Birthday:</Text>
                        {/* <CustomPicker
                            // default
                            selectedValue={gender}
                            onValueChange={(itemValue) => !itemValue ? setGender(gender) : setGender(itemValue)}
                        >
                            <Picker.Item enabled={false} color='grey' label="Select Gender" value={null} />
                            <Picker.Item label="Dog" value="dog" />
                            <Picker.Item label="Cat" value="cat" />
                        </CustomPicker> */}
                    </CardSection>
                </Card>
            </View>
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
    aboutMeStyle: {
        fontFamily: 'NotoSansBold',
        color: '#4D4C4D',
        fontSize: 18,
    },
    labelStyle: {
        marginTop: 10,
        flex: 1
    }
});

export default AddPetForm;
