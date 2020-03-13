import React, { FC } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import Colors from '../constans/Colors';
import {addNote} from '../actions/actions';

const RoundButton = styled.TouchableOpacity`
    width: 85px;
    height: 85px;
    borderRadius: 50px;
    backgroundColor: ${Colors.yellow};
    border: solid 3px ${Colors.black};
    display: flex;
    alignItems: center;
    justifyContent: center;
    position: absolute;
    bottom: 50px;
    right: 50px;
    opacity: 0.90;
`;

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProp = ( dispatch ) => {
    return {
        onPress: () => dispatch(addNote())
    };
};

interface IAddButtonProps {
    onPress: Function;
}

let AddButton: FC<IAddButtonProps> = props => {
    return (
        <RoundButton activeOpacity={1} onPress={ () => { props.onPress(); }} >
            <Text style={{fontSize: 50}}>+</Text>
        </RoundButton>
    );
};

export default connect(mapStateToProps, mapDispatchToProp)(AddButton);