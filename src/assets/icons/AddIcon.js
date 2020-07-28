import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const AddIcon = (props) => {
    return (
        <View >
            <Svg viewBox="0 0 15 15" {...props}>
                <Path
                    d="M7.5 0C3.4 0 0 3.4 0 7.5S3.4 15 7.5 15 15 11.6 15 7.5 11.6 0 7.5 0zm3.3 8.1H8.1v2.7c0 .3-.3.6-.6.6s-.6-.3-.6-.6V8.1H4.2c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h2.7V4.2c0-.3.3-.6.6-.6s.6.3.6.6v2.7h2.7c.3 0 .6.3.6.6s-.3.6-.6.6z"
                    fill="#fff"
                />
            </Svg>
        </View>
    );
}

export default AddIcon