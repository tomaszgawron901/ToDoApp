import React, { FC } from 'react';
import {ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import Note from './Note';

const mapStateToProps = ( state ) => {
    return {
        notesID: state.notesID
    };
};

interface INoteListProps {
    notesID: number[];
}

const NoteList: FC<INoteListProps> = (props) => {
    return (
        <ScrollView style={{flex: 1, padding: 15, paddingTop: 40}}>
            <View style={{paddingBottom: 40}}>
                {
                    props.notesID.map( id => {
                        return <Note  id={id} key={id}/>;
                    })
                }
            </View>
        </ScrollView> );
};

export default connect(mapStateToProps)(NoteList);