import React, { FC } from 'react';
import { View} from 'react-native';
import styled from 'styled-components/native';

import Colors from './constans/Colors';
import TodoApp from './screens/TodoApp';
import TodoEdit from './screens/TodoEdit';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

interface IMainProps {
}

const MainAreaView = styled.View`
    display: flex;
    backgroundColor: ${Colors.darkGray};
    flex: 1;
`;

const TodoStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Colors.yellow},
            headerTintColor: Colors.black,
            headerTitleStyle: {fontWeight: 'bold'}}}>
            <Stack.Screen name='TodoApp' component={TodoApp} options={{title: 'TodoApp'}}/>
            <Stack.Screen name='edit' component={TodoEdit} />
        </Stack.Navigator>
    );
};

const Main: FC<IMainProps> = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: Colors.black,
                inactiveTintColor: Colors.yellow,
                activeBackgroundColor: Colors.yellow,
                inactiveBackgroundColor: Colors.black,
                labelStyle: {fontSize: 20, fontWeight: 'bold'},
                tabStyle: {borderWidth: 1, borderStyle: 'solid', borderColor: Colors.darkGray}}}>
                <Tab.Screen name='Screen1' component={Screen1} />
                <Tab.Screen name='Screen2' component={Screen2} />
                <Tab.Screen name='Todo' component={TodoStack} />
            </Tab.Navigator>

        </NavigationContainer>
    );
};

export default Main;