import React, { FC } from 'react';
import {ScrollView, View, Text } from 'react-native';

import Note from './NoteView';
import {INoteState}from '../reducers/NoteReducer';
import NoteColors from '../constans/NoteColors';
import store from '../tools/store';
import { addNote } from '../actions/actions';

interface INoteListProps {
    notes: INoteState[];
}

const test = {
    id: 1,
    dataState: {
        title: '',
        text: '',
        color: NoteColors.blue,
        date: new Date()
    },
    viewState: {
        isClosed: true
    }
};

const NoteList: FC<INoteListProps> = props => {
    return (
        <ScrollView style={{flex: 1, padding: 15, paddingTop: 40}}>
            <View style={{paddingBottom: 40}}>
                {
                    props.notes.map( note => {
                        return <Note {...note} key={note.id} />;
                    })
                }
            </View>
        </ScrollView> );
};

export default NoteList;