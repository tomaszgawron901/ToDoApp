import React, { FC, Component } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import { View, TextInput } from 'react-native';
import Colors from '../../../constans/Colors';
import { delNote } from '../../../actions/actions';

const NoteEditor: FC = props => {
    return (
        <View style={{
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: Colors.black,
            backgroundColor: Colors.white,
            margin: 10,
            padding: 10
        }}>
            <View style={{
                height: 50,
                borderBottomColor: Colors.black,
                borderBottomWidth: 1,
                borderStyle: 'solid' }}>
                <TextInput style={{fontSize: 30}} />
            </View>
            <View style={{marginTop: 20}}>
                <TextInput multiline={true} textAlignVertical={'top'} style={{fontSize: 20, minHeight: 150}} />
            </View>

        </View>
    );
};

export default NoteEditor;