import React, { FC, Component, useState } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import { View, TextInput } from 'react-native';
import Colors from '../../constans/Colors';
import { delNote } from '../../actions/actions';

export interface INoteEditorProps {
    title: string,
    text: string,
    onChange: Function;
}

const NoteEditor: FC<INoteEditorProps> = props => {

    return (
        <View >
            <View style={{
                height: 50,
                borderBottomColor: Colors.black,
                borderBottomWidth: 1,
                borderStyle: 'solid' }}>
                <TextInput value={props.title} style={{fontSize: 30}} onChangeText={ value => {props.onChange({title: value}); }}/>
            </View>
            <View style={{marginTop: 20}}>
                <TextInput value={props.text} multiline={true} textAlignVertical={'top'} style={{fontSize: 20, minHeight: 150}} onChangeText={ value => {props.onChange({text: value}); }}/>
            </View>

        </View>
    );
};

export default NoteEditor;