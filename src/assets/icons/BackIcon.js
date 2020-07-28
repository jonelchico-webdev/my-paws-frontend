import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const BackIcon = (props) => {
    return (
        <View >
            <Svg viewBox="0 0 492 492" {...props}>
                <Path
                    d="M464.3 207.4l.8.2H135.9l103.5-103.7c5.1-5.1 7.8-11.9 7.8-19.1 0-7.2-2.8-14-7.8-19.1l-16.1-16.1c-5.1-5.1-11.8-7.9-19-7.9-7.2 0-14 2.8-19 7.8L7.8 226.9C2.8 232 0 238.8 0 246c0 7.2 2.8 14 7.8 19.1l177.4 177.4c5.1 5.1 11.8 7.8 19 7.8 7.2 0 13.9-2.8 19-7.8l16.1-16.1c5.1-5.1 7.8-11.8 7.8-19 0-7.2-2.8-13.6-7.8-18.7L134.7 284.4h330c14.8 0 27.3-12.8 27.3-27.6V234c0-14.8-12.8-26.6-27.7-26.6z"
                    fill="#486db5"
                />
            </Svg>
        </View>
    );
}

export default BackIcon