import React, { FC } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';
import NoteColors from '../../constans/NoteColors';

const NoteContainer = styled.View`
    width: 100%;
    border: solid 1px ${Colors.black};
    padding: 10px;
`;

const TitleText = styled.Text`
    width: 100%;
    borderBottomColor: ${Colors.black};
    borderBottomWidth: 1px;
    fontSize: 28px;
`;

const NoteText = styled.Text`
    marginTop: 20px;
    width: 100%;
    maxHeight: 200px;
`;

interface INoteViewProps {
    title: string;
    text: string;
    color: NoteColors;
    date: string;
}

const Note: FC<INoteViewProps> = props => {
    return (
        <NoteContainer style={{backgroundColor: props.color}}>
            <TitleText>{props.title}</TitleText>
            <NoteText>{props.text}</NoteText>
        </NoteContainer>
    );
};

export default Note;