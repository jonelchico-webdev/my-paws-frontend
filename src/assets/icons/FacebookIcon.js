import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const FacebookIcon = (props) => {
    return (
        <View >
            <Svg viewBox="0 0 496.2 496.2" {...props}>
                <Path
                    d="M248.1 0C111.3 0 0 111.3 0 248.1s111.3 248.1 248.1 248.1 248.1-111.3 248.1-248.1C496.1 111.3 384.9 0 248.1 0zm75 147.9h-27.4c-21.5 0-25.6 10.6-25.6 26v36.7h48.5l-6.6 53.3h-41.8v134.2h-53.4V263.9h-43.6v-53.3h43.6v-42c0-45.7 27.1-70.5 66.5-70.5 13.3 0 26.7.7 39.9 2.1l-.1 47.7z"
                    fill="#3b5998"
                />
            </Svg>
        </View>
    );
}

export default FacebookIcon