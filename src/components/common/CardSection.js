import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
    container: {
        // borderBottomWidth: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        // borderColor: '#ddd',
        position: 'relative'
    }
});

export { CardSection };
