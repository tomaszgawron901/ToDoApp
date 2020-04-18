import React, { FC, Component, useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { View, TextInput } from 'react-native';
import Colors from '../../constans/Colors';
import NoteColors from '../../constans/NoteColors';
import ColorPicker from './ColorPicker';
import { IDataState } from '../../reducers/NoteDataReducer';

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
    note: IDataState;
    onChange: (editedNote: IDataState) => void;
}

const NoteEditor: FC<INoteEditorProps> = ({note, onChange}) => {
    const [color, setColor] = useState(note.color);
    const [title, setTitle] = useState(note.title);
    const [text, setText] = useState(note.text);
    const [date, setDate] = useState(note.date);

    useEffect(() => {
        onChange({color, title, text, date});
    });

    return (
        <EditContainer style={{backgroundColor: NoteColors[color]}}>
            <HeadContainer>
                <TitleEdit placeholder={'Title'} placeholderTextColor={Colors.mediumGray} value={title} onChangeText={ value => {setTitle(value); }}/>
                <View style={{marginLeft: -50}}>
                    <ColorPicker selectedColor={color} onChange={ value => { setColor(value); }} />
                </View>
            </HeadContainer>
            <View style={{marginTop: 20}}>
                <TextInput placeholder={'Text'}
                placeholderTextColor={Colors.mediumGray}
                value={text}
                multiline={true}
                textAlignVertical={'top'}
                style={{fontSize: 20, minHeight: 150}}
                onChangeText={ value => { setText(value); }}/>
            </View>

        </EditContainer>
    );
};

export default NoteEditor;