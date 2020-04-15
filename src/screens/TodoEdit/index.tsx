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

const HeaderButtonsContainer = styled.View`
    width: 300px;
    justifyContent: space-around;
    flexDirection: row;
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
    navigation: any,
    dispach: any
}

const TodoEdit: FC<ITodoEditProps> = ({noteID, note, dispach, navigation}) => {
    const changeNote = (noteChanges) => {
        dispach( updateNote(noteID, Object.assign( {}, note, noteChanges, {date: new Date()} ) ) );
    };

    navigation.setOptions({
        headerLeft: () => (
            <HeaderButtonsContainer>
                <Button color={Colors.black} title={'Back'} onPress={ () => { navigation.goBack(); } }/>
                <Button color={Colors.black} title={'Save & Back'} onPress={ () => { dispach(delNote(noteID)); navigation.goBack(); } }/>
                <Button color={Colors.black} title={'Delete'} onPress={ () => { dispach(delNote(noteID)); navigation.goBack(); } }/>
            </HeaderButtonsContainer>
            )
      });

    return (
        <TodoEditArea >
            <ScrollView style={{flex: 1}}>
                <NoteEditor text={note.text} title={note.title} color={note.color} onChange={ changes => {changeNote(changes); }}/>
            </ScrollView>
        </TodoEditArea >
    );
};

export default connect(mapStateToProps, mapDispachToProps)(TodoEdit);