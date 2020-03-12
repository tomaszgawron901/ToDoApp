import React, { FC } from 'react';
import { SafeAreaView, Platform, StatusBar, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from './constans/Colors';
import store from './tools/store';
import NoteList from './screens/todoList/NoteList';
import AddButton from './screens/todoList/AddButton';

interface IMainProps {
}

const MainAreaView = styled.View`
    display: flex;
    backgroundColor: ${Colors.darkGray};
    flex: 1;
`;

const Main: FC<IMainProps> = () => {
    return (
        <MainAreaView>
            {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
            <NoteList notes={store.getState()} />
            <AddButton />
        </MainAreaView>
    );
};

export default Main;