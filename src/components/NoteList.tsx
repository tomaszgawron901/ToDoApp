import React, { FC } from 'react';
import {ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import Note from './NoteView';
import {INoteState}from '../reducers/NoteReducer';

interface INoteListProps {
    notes: INoteState[];
}

let NoteList: FC<INoteListProps> = ( {notes} ) => {
    return (
        <ScrollView style={{flex: 1, padding: 15, paddingTop: 40}}>
            <View style={{paddingBottom: 40}}>
                {
                    notes.map( note => {
                        return <Note note={note} dispatch={dispatch} key={note.id} />;
                    })
                }
            </View>
        </ScrollView> );
};

NoteList = connect()(NoteList);

export default NoteList;