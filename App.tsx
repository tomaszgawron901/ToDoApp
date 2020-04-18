import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import * as Contacts from 'expo-contacts';
import * as React from 'react';

import store from './src/tools/store';
import Main from './src/Main';

export default function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}
