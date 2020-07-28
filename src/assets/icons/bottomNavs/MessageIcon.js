import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from "react-native-svg";

const MessageIcon = (props) => {
    return (
        <View style={{ padding: 10 }} >
            <Svg width={30} height={30} viewBox="0 0 496.2 496.2" {...props}>
                <Path
                    d="M248.1 0C111.3 0 0 111.3 0 248.1s111.3 248.1 248.1 248.1 248.1-111.3 248.1-248.1C496.1 111.3 384.9 0 248.1 0zm.5 363.6c-17.2 0-34.3-2.2-50.9-6.5-14.9 15.4-35.5 24.2-56.9 24.2h-21.5l15.2-15.2c8.2-8.2 13.3-18.9 14.7-30.4-35-23-52.5-56.3-52.5-91.2 0-64.4 59.2-129.9 151.9-129.9 98.2 0 150.9 60.2 150.9 124.2 0 64.6-53.2 124.8-150.9 124.8z"
                    fill="#4d4c4d"
                />
            </Svg>
        </View>
    );
};

export default MessageIcon;