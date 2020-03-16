import React, { FC} from 'react';
import { View} from 'react-native';
import NoteList from '../../components/TodoAppComponents/NoteList';
import AddButton from '../../components/TodoAppComponents/AddButton';
import { connect } from 'react-redux';
import  Colors  from '../../constans/Colors';

const TodoApp: FC<{navigation}> = props => {
        return (
            <View style={{flex: 1, backgroundColor: Colors.darkGray}}>
                <NoteList onElementPress={(noteID: number) => { props.navigation.navigate('edit', noteID); }} />
                <AddButton />
            </View>
        );
};

export default connect()(TodoApp);