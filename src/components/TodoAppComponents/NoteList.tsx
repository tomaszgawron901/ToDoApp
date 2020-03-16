import React, { FC } from 'react';
import {ScrollView, View} from 'react-native';
import { connect } from 'react-redux';

import Note from './Note';

const mapStateToProps = ( state, {onElementPress} ) => {
    return {
        notesID: state.notesID,
        onElementPress: onElementPress
    };
};

export interface INoteListProps {
    notesID: number[];
    onElementPress: Function
}

const NoteList: FC<INoteListProps> = (props) => {
    return (
        <ScrollView style={{flex: 1, padding: 15}}>
            <View style={{paddingBottom: 20}}>
                {
                    props.notesID.map( id => <Note  id={id} onPress={props.onElementPress} key={id}/>)
                }
            </View>
        </ScrollView> );
};

export default connect(mapStateToProps)(NoteList);