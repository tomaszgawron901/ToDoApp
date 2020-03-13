import React, { FC, Component } from 'react';
import styled from 'styled-components/native';

import Colors from '../constans/Colors';
import {setView} from '../actions/actions';
import {viewActionTypes} from '../actions/types';
import {INoteState}from '../reducers/NoteReducer';

const NoteContainer = styled.TouchableOpacity`
    width: 100%;
    border: solid 1px ${Colors.black};
    padding: 10px;
    marginBottom: 10px;
`;

const TitleText = styled.Text`
    width: 100%;
    borderBottomColor: ${Colors.black};
    borderBottomWidth: 1px;
    fontSize: 28px;
    maxHeight: 40px;
`;

const NoteText = styled.Text`
    marginTop: 10px;
    width: 100%;
`;

const DateText = styled.Text`
    color: ${Colors.mediumGray};
    alignSelf: flex-end;
`;

interface INoteProps extends INoteState {
    dispatch: Function;
}

let Note: FC<INoteProps> = ( { text, dispatch } ) => {
    const _onPress = () => {
        dispatch(setView(note.id, viewActionTypes.INVERSE_VIEW));
    };

    return (
        <NoteContainer style={{backgroundColor: note.dataState.color}} activeOpacity={0.9} onPress={() => { _onPress(); }} >
            <TitleText>{note.dataState.title}</TitleText>
            <NoteText style={note.viewState.isClosed ? {maxHeight: 250} : {maxHeight: undefined}}>{note.dataState.text}</NoteText>
            <DateText>{note.dataState.date.toLocaleDateString()}</DateText>
        </NoteContainer>
    );
};

export default Note;