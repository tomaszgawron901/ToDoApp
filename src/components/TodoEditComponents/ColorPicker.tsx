import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text, Picker, View } from 'react-native';
import { connect } from 'react-redux';

import Colors from '../../constans/Colors';
import NoteColors from '../../constans/NoteColors';

const ColorPickerContainer = styled.View`
    height: 60px;
    border: solid 3px ${Colors.black};
    borderRadius: 5px;
    marginTop: 5px;
    marginBottom: 5px;
`;

export interface IColorPickerProps {
    selectedColor: string,
    onChange: Function
}

const ColorPicker: FC<IColorPickerProps> = ({selectedColor, onChange}) => {
    return (
        <ColorPickerContainer style={{
            backgroundColor: NoteColors[selectedColor]
        }}>
            <Picker
                style={{flex: 1}}
                selectedValue={selectedColor}
                onValueChange={ (newColor) => { onChange(newColor); }}>
                {
                    Object.keys(NoteColors).map( colorName => {
                        return <Picker.Item label={colorName} value={colorName} key={colorName}/>;
                    } )
                }
            </Picker>
        </ColorPickerContainer>
    );
};

export default ColorPicker;
