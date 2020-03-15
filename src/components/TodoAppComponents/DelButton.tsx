import React, { FC } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import Colors from '../../constans/Colors';
import {delNote} from '../../actions/actions';

const RoundButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    border: solid 1px ${Colors.black};
    display: flex;
    alignItems: center;
    justifyContent: center;
    opacity: 0.90;
`;

const mapDispatchToProp = ( dispatch, ownProps ) => {
    return {
        onPress: () => dispatch(delNote(ownProps.id))
    };
};

interface IDelButtonProps {
    onPress: Function;
}

let DelButton: FC<IDelButtonProps> = props => {
    return (
        <RoundButton activeOpacity={1} onPress={ () => { props.onPress(); }} >
            <Text style={{fontSize: 25}}>☓</Text>
        </RoundButton>
    );
};

export default connect(undefined, mapDispatchToProp)(DelButton);