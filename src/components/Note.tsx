import React, { FC, Component } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import Colors from '../constans/Colors';
import {updateNote} from '../actions/actions';
import {IDataState} from '../reducers/NoteDataReducer';

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

const mapStateToProps = ( state, ownProps ) => {
    return { note: state.notesByID[ownProps.id] };
};

const mapDispatchToProp = ( dispatch, ownProps ) => {
    return {
        onPress: () => {console.log(ownProps.id);
        }
    };
};

interface INoteProps {
    note: IDataState;
    onPress: Function;
}

const Note: FC<INoteProps> = props => {
    return (
        <NoteContainer style={{backgroundColor: props.note.color}} activeOpacity={0.9} onPress={() => { props.onPress(); }} >
            <TitleText>{props.note.title}</TitleText>
            <NoteText>{props.note.text}</NoteText>
            <DateText>{props.note.date.toLocaleDateString()}</DateText>
        </NoteContainer>
    );
};

export default connect(mapStateToProps, mapDispatchToProp)(Note);