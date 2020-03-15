import React, { FC, Component } from 'react';
import styled from 'styled-components/native';
import {BackButton, DeleteButton, ColorPicker} from './HeadComponents';
import { connect } from 'react-redux';

import Colors from '../../../constans/Colors';
import { Picker } from 'react-native';
import NoteColors from '../../../constans/NoteColors';

const HeadContainer = styled.View`
    width: 100%;
    backgroundColor: ${Colors.darkGray};
    border: solid 1px ${Colors.black};
    flexDirection: row;
`;

const Head: FC = () => {
    return (
        <HeadContainer>
            <BackButton onPress={() => undefined}/>
            <ColorPicker selectedColor={NoteColors.red} />
            <DeleteButton onPress={() => undefined}/>
        </HeadContainer>
    );
};

export default Head;
