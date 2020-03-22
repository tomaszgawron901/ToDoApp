import React, { FC, Component, useState } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import { View, TextInput } from 'react-native';
import Colors from '../../constans/Colors';
import { delNote } from '../../actions/actions';
import NoteColors from '../../constans/NoteColors';
import ColorPicker from './ColorPicker';

const EditContainer = styled.View`
    border: solid 1px ${Colors.black};
    padding: 10px;
    margin: 10px;
`;

const TitleEdit = styled.TextInput`
    flexGrow: 1;
    fontSize: 28px;
    marginRight: 60px;
`;

const NoteEdit = styled.Text`
    marginTop: 10px;
    width: 100%;
`;

const HeadContainer = styled.View`
    borderBottomColor: ${Colors.black};
    borderBottomWidth: 1px;
    flexDirection: row;
`;

export interface INoteEditorProps {
    title: string,
    text: string,
    color: string,
    onChange: Function;
}

const NoteEditor: FC<INoteEditorProps> = props => {

    return (
        <EditContainer style={{backgroundColor: NoteColors[props.color]}}>
            <HeadContainer>
                <TitleEdit placeholder={'Title'} placeholderTextColor={Colors.mediumGray} value={props.title} onChangeText={ value => {props.onChange({title: value}); }}/>
                <View style={{marginLeft: -50}}>
                    <ColorPicker selectedColor={props.color} onChange={ (color) => { props.onChange({color: color}); }} />
                </View>
            </HeadContainer>
            <View style={{marginTop: 20}}>
                <TextInput placeholder={'Text'} placeholderTextColor={Colors.mediumGray} value={props.text} multiline={true} textAlignVertical={'top'} style={{fontSize: 20, minHeight: 150}} onChangeText={ value => {props.onChange({text: value}); }}/>
            </View>

        </EditContainer>
    );
};

export default NoteEditor;