import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

const AddColoredIcon = (props) => {
    return (
        <View >
            <Svg width={20} height={20} viewBox="0 0 15 15" {...props}>
                <Defs>
                    <LinearGradient
                        id="prefix__a"
                        x1={7.5}
                        y1={15}
                        x2={7.5}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset={0} stopColor="#d84b9b" />
                        <Stop offset={1} stopColor="#486db5" />
                    </LinearGradient>
                </Defs>
                <Path
                    d="M7.5 0A7.5 7.5 0 1015 7.5 7.508 7.508 0 007.5 0zm3.281 8.125H8.125v2.656a.625.625 0 01-1.25 0V8.125H4.219a.625.625 0 010-1.25h2.656V4.219a.625.625 0 011.25 0v2.656h2.656a.625.625 0 010 1.25z"
                    fill="url(#prefix__a)"
                />
            </Svg>
        </View>
    );
}

export default AddColoredIcon;