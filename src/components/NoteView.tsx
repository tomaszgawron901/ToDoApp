import React, { FC, Component } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

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

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProp = ( dispatch ) => {
    return {
        onPress: (id: number) => dispatch(setView(id, viewActionTypes.INVERSE_VIEW))
    };
};

interface INoteProps {
    note: INoteState;
    onPress: Function;
}

const Note: FC<INoteProps> = props => {
    return (
        <NoteContainer style={{backgroundColor: props.note.dataState.color}} activeOpacity={0.9} onPress={() => { props.onPress(props.note.id); }} >
            <TitleText>{props.note.dataState.title}</TitleText>
            <NoteText style={props.note.viewState.isClosed ? {maxHeight: 250} : {maxHeight: undefined}}>{props.note.dataState.text}</NoteText>
            <DateText>{props.note.dataState.date.toLocaleDateString()}</DateText>
        </NoteContainer>
    );
};

export default connect(mapStateToProps, mapDispatchToProp)(Note);