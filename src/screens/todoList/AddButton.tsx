import React, { FC } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const RoundButton = styled.TouchableOpacity`
    width: 85px;
    height: 85px;
    borderRadius: 50px;
    backgroundColor: ${Colors.yellow};
    border: solid 1px ${Colors.black};
    display: flex;
    alignItems: center;
    justifyContent: center;
    position: absolute;
    bottom: 50px;
    right: 50px;
    opacity: 0.90;
`;

const AddButton: FC = () => {
    return (
        <RoundButton activeOpacity={1}>
            <Text style={{fontSize: 50}}>+</Text>
        </RoundButton>
    );
};

export default AddButton;