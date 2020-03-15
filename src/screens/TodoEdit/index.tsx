import React, { FC} from 'react';
import { View} from 'react-native';
import { connect } from 'react-redux';
import Head from '../../components/TodoEditComponents/Head';
import styled from 'styled-components/native';
import EditMain from '../../components/TodoEditComponents/EditMain';

const TodoEditArea = styled.View`
    flex: 1;
    paddingTop: 40px;
`;

const TodoEdit: FC = () => {
        return (
            <TodoEditArea >
                <Head/>
                <EditMain/>
            </TodoEditArea >
        );
};

export default TodoEdit;