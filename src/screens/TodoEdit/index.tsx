import React, { FC, useState} from 'react';
import { View, ScrollView, Button} from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import ColorPicker from '../../components/TodoEditComponents/ColorPicker';
import Colors  from '../../constans/Colors';
import { IDataState } from '../../reducers/NoteDataReducer';
import {updateNote, delNote} from '../../actions/actions';
import NoteEditor from '../../components/TodoEditComponents/NoteEditor';
import NoteColors from '../../constans/NoteColors';
import { HeaderTitle } from '@react-navigation/stack';

const TodoEditArea = styled.View`
    flex: 1;
    backgroundColor: ${Colors.darkGray}
`;

const HeaderButtonContainer = styled.View`
    marginLeft: 10px;
    marginRight: 10px;
`;

const mapStateToProps = ( state, {route} ) => {
    return {
        noteID: route.params.noteID,
        note: {...state.notesByID[route.params.noteID]}
    };
};

const mapDispachToProps = (dispach, {route}) => {
    return {
        DeleteNote() {
            dispach(delNote(route.params.noteID));
        },
        UpdateNote(note: IDataState) {
            dispach(updateNote(route.params.noteID, note));
        }
    };
};

export interface ITodoEditProps {
    noteID: number,
    note: IDataState,
    navigation: any,
    DeleteNote: () => void;
    UpdateNote: (IDataState) => void;
}

const TodoEdit: FC<ITodoEditProps> = props => {
    let note = props.note;
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
            <Button color={Colors.black} title={'Save & Back'} onPress={ () => { props.UpdateNote(note); props.navigation.goBack(); } }/>
        ),
        headerRight: () => (
            <HeaderButtonContainer>
                <Button color={Colors.black} title={'Delete'} onPress={ () => { props.DeleteNote(); props.navigation.goBack(); } }/>
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

export default connect(mapStateToProps, mapDispachToProps)(TodoEdit);