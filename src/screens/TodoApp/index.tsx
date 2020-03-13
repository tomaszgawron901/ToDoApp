import React, { FC} from 'react';
import { View} from 'react-native';
import NoteList from '../../components/NoteList';
import AddButton from '../../components/AddButton';
import { connect } from 'react-redux';

const TodoApp: FC = () => {
        return (
            <View style={{flex: 1}}>
                <NoteList />
                <AddButton />
            </View>
        );
};

export default connect()(TodoApp);