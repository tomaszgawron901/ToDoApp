import React, { FC } from 'react';
import { SafeAreaView, Platform, StatusBar, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

import AddButton from './screens/todoList/AddButton';
import NoteList from './screens/todoList/NoteList';
import Colors from './constans/Colors';

interface IMainProps { }

const MainAreaView = styled.View`
    display: flex;
    backgroundColor: ${Colors.darkGray};
    flex: 1;
`;

const Main: FC<IMainProps> = props => {
    return (
        <MainAreaView>
            {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
            <NoteList/>
            <AddButton></AddButton>
        </MainAreaView>
    );
};

export default Main;