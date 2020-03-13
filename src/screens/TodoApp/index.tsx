import React, { FC, Component } from 'react';
import { View, Text } from 'react-native';
import NoteList from '../../components/NoteList';
import AddButton from '../../components/AddButton';
import store from '../../tools/store';

class TodoApp extends Component {
    unsubscribe;

    componentDidMount() {
        this.unsubscribe = this.subsctibe();
    }

    subsctibe() {
        return store.subscribe( () => {
            this.forceUpdate();
        } );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <NoteList notes={store.getState()}></NoteList>
                <AddButton />
            </View>
        );
    }
}

export default TodoApp;