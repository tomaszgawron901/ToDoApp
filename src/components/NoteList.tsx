import React, { FC } from 'react';
import {ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import Note from './NoteView';
import {INoteState}from '../reducers/NoteReducer';
import NoteColors from '../constans/NoteColors';
import { addNote } from '../actions/actions';

const mapStateToProps = ( state ) => {
    return {
        notes: state
    };
};

interface INoteListProps {
    notes: INoteState[];
}

const NoteList: FC<INoteListProps> = (props) => {
    return (
        <ScrollView style={{flex: 1, padding: 15, paddingTop: 40}}>
            <View style={{paddingBottom: 40}}>
                {
                    props.notes.map( note => {
                        return <Note note={note} key={note.id}/>;
                    })
                }
            </View>
        </ScrollView> );
};

export default connect(mapStateToProps)(NoteList);