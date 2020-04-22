import React, { FC, useState} from 'react';
import { View, ScrollView, Button} from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Colors  from '../../constans/Colors';
import { IDataState } from '../../reducers/NoteDataReducer';
import {updateNote, addNote} from '../../actions/actions';
import NoteEditor from '../../components/TodoEditComponents/NoteEditor';

const TodoEditArea = styled.View`
    flex: 1;
    backgroundColor: ${Colors.darkGray}
`;

const HeaderButtonContainer = styled.View`
    marginLeft: 10px;
    marginRight: 10px;
`;

const mapDispachToProps = (dispach) => {
    return {
        AddNote() {
            let noteAction = addNote();
            dispach(noteAction);
            return noteAction.id;

        },
        UpdateNote(noteID: number, note: IDataState) {
            dispach(updateNote(noteID, note));
        }
    };
};

export interface ITodoEditProps {
    navigation: any,
    AddNote: () => number;
    UpdateNote: (noteID: number, note: IDataState) => void;
}

const TodoAdd: FC<ITodoEditProps> = props => {
    let note: IDataState = {title: '', text: '', color: 'white', date: new Date()};
    let noteID: number;
    const setNote = (editedNote: IDataState) => {
        note = editedNote;
    };

    props.navigation.setOptions({
        headerLeft: () => (
            <HeaderButtonContainer>
                <Button color={Colors.black} title={'Back'} onPress={ () => { props.navigation.goBack(); } }/>
            </HeaderButtonContainer>
        ),
        headerTitle: () => (
            <Button color={Colors.black} title={'Save & Back'} onPress={ () => {
                noteID = props.AddNote();
                props.UpdateNote(noteID, note);
                props.navigation.goBack();
            } }/>
        ),
        headerRight: () => (
            <HeaderButtonContainer>
                <Button color={Colors.black} title={'Delete'} onPress={ () => { props.navigation.goBack(); } }/>
            </HeaderButtonContainer>
        )
      });

    return (
        <TodoEditArea >
            <ScrollView style={{flex: 1}}>
                <NoteEditor note={note} onChange={ editedNote => {setNote(editedNote); }}/>
            </ScrollView>
        </TodoEditArea >
    );
};

export default connect(undefined, mapDispachToProps)(TodoAdd);