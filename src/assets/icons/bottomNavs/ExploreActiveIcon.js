import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

const ExploreActiveIcon = (props) => {
    return (
        <View style={{ padding: 10 }} >
            <Svg width={30} height={30} viewBox="0 0 496.2 496.2" {...props}>
                <Defs>
                    <LinearGradient
                        id="prefix__a"
                        x1={247.499}
                        y1={495.6}
                        x2={247.499}
                        y2={-0.6}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset={0} stopColor="#486db4" />
                        <Stop offset={1} stopColor="#d74b9a" />
                    </LinearGradient>
                </Defs>
                <Path
                    d="M247.5-.6C110.424-.6-.6 110.425-.6 247.5c0 136.951 111.025 248.1 248.1 248.1s248.1-111.149 248.1-248.1C495.6 110.425 384.574-.6 247.5-.6zm54.333 302.434L98.64 396.36l94.526-203.194L396.36 98.64z"
                    transform="translate(.6 .6)"
                    fill="url(#prefix__a)"
                />
            </Svg>
        </View>
    );
}

export default ExploreActiveIcon