import React, { FC, Component } from 'react';
import { View, Text } from 'react-native';
import NoteList from '../../components/NoteList';
import AddButton from '../../components/AddButton';
import store from '../../tools/store';
import { connect } from 'react-redux';

let TodoApp: FC = () => {
        return (
            <View style={{flex: 1}}>
                <NoteList notes={store.getState()}></NoteList>
                <AddButton dispatch={store.dispatch} />
            </View>
        );
};

TodoApp = connect()(TodoApp);

export default TodoApp;