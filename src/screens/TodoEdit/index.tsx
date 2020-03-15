import React, { FC} from 'react';
import { View} from 'react-native';
import { connect } from 'react-redux';
import Head from '../../components/TodoEditComponents/Head';

const TodoEdit: FC = () => {
        return (
            <View style={{flex: 1}}>
                <Head/>
            </View>
        );
};

export default TodoEdit;