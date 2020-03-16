import React, { FC, Component } from 'react';
import styled from 'styled-components/native';
import { Text, Picker, View } from 'react-native';
import { connect } from 'react-redux';

import Colors from '../../../constans/Colors';
import NoteColors from '../../../constans/NoteColors';

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
