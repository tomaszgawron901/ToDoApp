import React, { FC, Component } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import Colors from '../../../constans/Colors';
import { ScrollView } from 'react-native';
import NoteColors from '../../../constans/NoteColors';
import NoteEditor from './NoteEditor';

const EditMain: FC = () => {
    return (
        <ScrollView style={{
            flex: 1
        }}>
            <NoteEditor />
        </ScrollView>
    );
};

export default EditMain;
