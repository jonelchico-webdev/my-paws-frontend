import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

const MessageActiveIcon = (props) => {
    return (
        <View style={{ padding: 10 }} >
            <Svg width={30} height={30} viewBox="0 0 496.2 496.2" {...props}>
                <Defs>
                    <LinearGradient
                        id="prefix__a"
                        x1={248.1}
                        y1={496.2}
                        x2={248.1}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset={0} stopColor="#486db4" />
                        <Stop offset={1} stopColor="#d74b9a" />
                    </LinearGradient>
                </Defs>
                <Path
                    d="M248.1 0C111.3 0 0 111.3 0 248.1s111.3 248.1 248.1 248.1 248.1-111.3 248.1-248.1C496.1 111.3 384.9 0 248.1 0zm.513 363.62a204.64 204.64 0 01-50.895-6.474 79.502 79.502 0 01-56.923 24.246H119.34l15.17-15.17a51.334 51.334 0 0014.66-30.359c-35.027-22.986-52.46-56.287-52.46-91.197 0-64.406 59.195-129.858 151.902-129.858 98.212 0 150.875 60.228 150.875 124.215 0 64.41-53.219 124.596-150.875 124.596z"
                    fill="url(#prefix__a)"
                />
            </Svg>
        </View>
    );
}

export default MessageActiveIcon