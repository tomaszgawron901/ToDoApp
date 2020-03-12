import React, { FC } from 'react';
import { SafeAreaView, Platform, StatusBar, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from './constans/Colors';
import store from './tools/store';
import TodoApp from './screens/TodoApp';
import NoteList from './components/NoteList';

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
            <TodoApp />
        </MainAreaView>
    );
};

export default Main;