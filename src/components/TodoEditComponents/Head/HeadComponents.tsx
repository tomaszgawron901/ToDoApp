import React, { FC, Component } from 'react';
import styled from 'styled-components/native';
import { Text, Picker, View } from 'react-native';
import { connect } from 'react-redux';

import Colors from '../../../constans/Colors';
import NoteColors from '../../../constans/NoteColors';

const CustomButtomContainer = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    backgroundColor: ${Colors.yellow};
    border: solid 3px ${Colors.black};
    display: flex;
    alignItems: center;
    justifyContent: center;
    margin: 5px;
    opacity: 0.80;
    borderRadius: 5px;
`;

const BackButtonText = styled.Text`
    marginTop: -35px;
    marginLeft: -12px;
    fontSize: 90px;
`;

const DeleteButtonText = styled.Text`
    fontSize: 60px;
`;

export interface ICustomButtomProps {
    onPress: Function;
}

export const BackButton: FC<ICustomButtomProps> = props => {
    return (
        <CustomButtomContainer activeOpacity={1} onPress={props.onPress}>
            <BackButtonText>←</BackButtonText>
        </CustomButtomContainer>
    );
};

export const DeleteButton: FC<ICustomButtomProps> = props => {
    return (
        <CustomButtomContainer activeOpacity={1} onPress={props.onPress}>
            <DeleteButtonText>X</DeleteButtonText>
        </CustomButtomContainer>
    );
};

export class ColorPicker extends React.PureComponent<{ selectedColor: NoteColors}> {
    state: { color: string } = {color: 'white'};

    constructor(props: { selectedColor: NoteColors}) {
        super(props);
        Object.keys(NoteColors).forEach( name => {
            if (NoteColors[name] === props.selectedColor) {
                this.state = { color: name};
                return;
            }
        } );
    }

    update = (color) => {
        this.setState({ color: color });
    }

    render() {
        return(
            <View
                style={{
                    height: 70,
                    borderColor: Colors.black,
                    borderStyle: 'solid',
                    borderWidth: 3,
                    borderRadius: 5,
                    flexGrow: 1,
                    marginTop: 5,
                    marginBottom: 5,
                    backgroundColor: NoteColors[this.state.color]
                }}>
                <Picker
                    style={{
                        flex: 1
                    }}
                    selectedValue={this.state.color}
                    onValueChange={this.update}>
                    {
                        Object.keys(NoteColors).map( colorName => {
                            return <Picker.Item label={colorName} value={colorName} key={colorName}/>;
                        } )
                    }
                </Picker>
            </View>
        );
    }
}
