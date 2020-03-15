import React, { FC} from 'react';
import { View} from 'react-native';
import NoteList from '../../components/TodoAppComponents/NoteList';
import AddButton from '../../components/TodoAppComponents/AddButton';
import { connect } from 'react-redux';

const TodoApp: FC = () => {
        return (
            <View style={{flex: 1}}>
                <NoteList />
                <AddButton />
            </View>
        );
};

export default TodoApp;