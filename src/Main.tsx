import React, { FC } from 'react';
import { SafeAreaView, Platform, StatusBar, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from './constans/Colors';
import store from './tools/store';
import TodoApp from './screens/TodoApp';
import TodoEdit from './screens/TodoEdit';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

interface IMainProps {
}

const MainAreaView = styled.View`
    display: flex;
    backgroundColor: ${Colors.darkGray};
    flex: 1;
`;

const Main: FC<IMainProps> = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={TodoApp} />
                <Stack.Screen name='edit' component={TodoEdit} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Main;