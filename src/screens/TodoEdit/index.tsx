import React, { FC} from 'react';
import { View} from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import EditMain from '../../components/TodoEditComponents/EditMain';
import { ColorPicker } from '../../components/TodoEditComponents/Head/HeadComponents';

const TodoEditArea = styled.View`
    flex: 1;
    paddingTop: 40px;
`;

const mapStateToProps = ( state, {route} ) => {
    return {
        noteID: route.params,
        note: state.notesByID[route.params]
    };
};

const TodoEdit = props => {
    console.log(props);
    
        return (
            <TodoEditArea >

                <ColorPicker selectedColor={props.note.color} />
                <EditMain/>
            </TodoEditArea >
        );
};

export default connect(mapStateToProps)(TodoEdit);