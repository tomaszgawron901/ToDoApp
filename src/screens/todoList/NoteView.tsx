import React, { FC, Component } from 'react';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';
import store from '../../tools/store';
import {setView} from '../../actions/actions';
import {viewActionTypes} from '../../actions/types';
import {INoteState}from '../../reducers/NoteReducer';

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

interface INoteProps {
    note: INoteState;
}

class Note extends React.PureComponent<INoteProps> {
    _onPress() {
        store.dispatch(setView(this.props.note.id, viewActionTypes.INVERSE_VIEW));
    }

    render() {
        return (
            <NoteContainer style={{backgroundColor: this.props.note.dataState.color}} activeOpacity={0.9} onPress={() => { this._onPress(); }} >
                <TitleText>{this.props.note.dataState.title}</TitleText>
                <NoteText style={this.props.note.viewState.isClosed ? {maxHeight: 250} : {maxHeight: undefined}}>{this.props.note.dataState.text}</NoteText>
                <DateText>{this.props.note.dataState.date.toLocaleDateString()}</DateText>
            </NoteContainer>
        );
    }

}

export default Note;