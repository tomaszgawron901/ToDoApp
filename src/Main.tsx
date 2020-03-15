import React, { FC } from 'react';
import { SafeAreaView, Platform, StatusBar, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from './constans/Colors';
import store from './tools/store';
import TodoApp from './screens/TodoApp';
import TodoEdit from './screens/TodoEdit';

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
            <TodoEdit />
        </MainAreaView>
    );
};

export default Main;