import React, { FC } from 'react';
import { SafeAreaView, Platform, StatusBar, ScrollView, Button } from 'react-native';
import styled from 'styled-components/native';

import Welcome from './screens/Welcome';
import AddButton from './screens/todoList/AddButton';
import Colors from './constans/Colors';

interface IMainProps { }

const CenteredAreaView = styled.View`
    display: flex;
    padding: 20px;
    paddingTop: 40px;
    backgroundColor: ${Colors.darkGray};
    flex: 1;
`;

const Main: FC<IMainProps> = props => {
    return (
        <CenteredAreaView>
            {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
            <Welcome myProps='Mój props'/>
            <AddButton></AddButton>

        </CenteredAreaView>
    );
};

export default Main;