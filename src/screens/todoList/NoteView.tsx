import React, { FC, Component } from 'react';
import { Text, DatePickerAndroid, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';
import NoteColors from '../../constans/NoteColors';

const NoteContainer = styled.TouchableOpacity`
    width: 100%;
    border: solid 1px ${Colors.black};
    padding: 10px;
    marginBottom: 10px;
`;

const TitleText = styled.Text`
    width: 100%;
    borderBottomColor: ${Colors.black};
    borderBottomWidth: 1px;
    fontSize: 28px;
    maxHeight: 40px;
`;

const NoteText = styled.Text`
    marginTop: 10px;
    width: 100%;
`;

const DateText = styled.Text`
    color: ${Colors.mediumGray};
    alignSelf: flex-end;
`;

interface INoteViewProps {
    title: string;
    text: string;
    color: NoteColors;
}

class Note extends React.PureComponent<INoteViewProps> {
    readonly state = {minimalized: false };
    readonly date = new Date();

    _changeSize() {
        this.setState({minimalized: !this.state.minimalized });
    }

    render() {
        return (
            <NoteContainer style={{backgroundColor: this.props.color}} activeOpacity={0.9} onPress={() => {this._changeSize(); }} >
                <TitleText>{this.props.title}</TitleText>
                <NoteText style={this.state.minimalized ? {maxHeight: undefined} : {maxHeight: 250}}>{this.props.text}</NoteText>
                <DateText>{this.date.toLocaleDateString()}</DateText>
            </NoteContainer>
        );
    }

}

export default Note;