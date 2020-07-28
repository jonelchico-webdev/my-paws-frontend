import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Defs } from "react-native-svg";

const ExploreIcon = (props) => {
    return (
        <View style={{ padding: 10 }} >
            <Svg width={30} height={30} viewBox="0 0 496.2 496.2" {...props}>
                <Path
                    d="M248.1 0C111.025 0 0 111.025 0 248.1c0 136.951 111.025 248.1 248.1 248.1s248.1-111.149 248.1-248.1C496.201 111.025 385.176 0 248.1 0zm54.334 302.434L99.24 396.96l94.526-203.194L396.961 99.24z"
                    fill="#454545"
                />
            </Svg>
        </View>
    );
};

export default ExploreIcon;