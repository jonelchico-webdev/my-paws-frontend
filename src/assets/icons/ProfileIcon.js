import React from 'react';
import { View } from 'react-native';
import Svg, {  Path } from 'react-native-svg';

const ProfileIcon = (props) => {
    return (
        <View >
            <Svg viewBox="0 0 496.2 496.2" {...props}>
                <Path
                    d="M248.1 0C111.3 0 0 111.3 0 248.1s111.3 248.1 248.1 248.1 248.1-111.3 248.1-248.1C496.1 111.3 384.9 0 248.1 0zm0 98.1c44.1 0 80 41.4 80 92.3s-35.9 92.3-80 92.3c-44.2 0-80.1-41.4-80-92.3 0-50.9 35.9-92.3 80-92.3zm101.6 265c-71.7 56.1-175.2 43.5-231.3-28.2l14.4-30.4c7.9-16.5 21.2-29.8 37.7-37.7 19 24.1 46.7 39.4 77.7 39.4 30.9 0 58.7-15.3 77.7-39.4 16.5 7.9 29.8 21.2 37.7 37.7l14.4 30.4c-8.4 10.5-17.8 19.9-28.3 28.2z"
                    fill="#486db5"
                />
            </Svg>
        </View>
    );
}

export default ProfileIcon