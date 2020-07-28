import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';

const Card = ({ children }) => (
    <View style={styles.container} >
        {children}
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: 320

        // minHeight: 300,
    },
});

export { Card };
