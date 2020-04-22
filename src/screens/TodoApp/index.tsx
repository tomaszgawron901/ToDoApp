import React, { FC} from 'react';
import { View} from 'react-native';
import NoteList from '../../components/TodoAppComponents/NoteList';
import AddButton from '../../components/TodoAppComponents/AddButton';
import { connect } from 'react-redux';
import  Colors  from '../../constans/Colors';
import { addNote, updateNote, curentID } from '../../actions/actions';

const mapDispachToProps = dispach => {
    return {
        dispach: dispach
    };
};

const TodoApp = props => {
    const onAddButtonPress = () => {
        props.navigation.navigate('add');
    };

    const onNotePress = noteID => {
        props.navigation.navigate('edit', {noteID: noteID});
    };

    return (
        <View style={{flex: 1, backgroundColor: Colors.darkGray}}>
            <NoteList onElementPress={onNotePress} />
            <AddButton onPress={onAddButtonPress}/>
        </View>
    );
};

export default connect(undefined, mapDispachToProps)(TodoApp);