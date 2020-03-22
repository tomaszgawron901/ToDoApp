import React, { FC, useState} from 'react';
import { View, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import ColorPicker from '../../components/TodoEditComponents/ColorPicker';
import Colors  from '../../constans/Colors';
import { IDataState } from '../../reducers/NoteDataReducer';
import {updateNote} from '../../actions/actions';
import NoteEditor from '../../components/TodoEditComponents/NoteEditor';
import NoteColors from '../../constans/NoteColors';

const TodoEditArea = styled.View`
    flex: 1;
    backgroundColor: ${Colors.darkGray}
`;

const mapStateToProps = ( state, {route} ) => {
    return {
        noteID: route.params.noteID,
        note: {...state.notesByID[route.params.noteID]}
    };
};

const mapDispachToProps = (dispach) => {
    return {
        dispach: dispach
    };
};

export interface ITodoEditProps {
    noteID: number,
    note: IDataState,
    dispach: any
}

const TodoEdit: FC<ITodoEditProps> = ({noteID, note, dispach}) => {
    const changeNote = (noteChanges) => {
        dispach( updateNote(noteID, Object.assign( {}, note, noteChanges, {date: new Date()} ) ) );
    };

    return (
        <TodoEditArea >
            <ScrollView style={{flex: 1}}>
                <NoteEditor text={note.text} title={note.title} color={note.color} onChange={ changes => {changeNote(changes); }}/>
            </ScrollView>
        </TodoEditArea >
    );
};

export default connect(mapStateToProps, mapDispachToProps)(TodoEdit);