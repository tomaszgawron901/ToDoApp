import React, { FC, Component } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import Colors from '../../../constans/Colors';

const CustomButtomContainer = styled.TouchableOpacity`
    width: 85px;
    height: 85px;
    backgroundColor: ${Colors.yellow};
    border: solid 3px ${Colors.black};
    display: flex;
    alignItems: center;
    justifyContent: center;
    opacity: 0.90;
`;

export interface ICustomButtomProps {
    text: string;
    onPress: Function;
}

const customButton: FC<ICustomButtomProps> = props => {
    return (
        <CustomButtomContainer  onPress={props.onPress}>
            <Text style={{fontSize: 50}} >{props.text}</Text>
        </CustomButtomContainer>
    );
};

export default customButton;