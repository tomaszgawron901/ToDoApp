import React, { FC, Component } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import Colors from '../../constans/Colors';
import {delNote} from '../../actions/actions';
import {IDataState} from '../../reducers/NoteDataReducer';
import { View } from 'react-native';
import DelButton from './DelButton';

const NoteContainer = styled.TouchableOpacity`
    width: 100%;
    border: solid 1px ${Colors.black};
    padding: 10px;
    marginBottom: 10px;
`;

const TitleText = styled.Text`
flexGrow: 1;
    fontSize: 28px;
    marginRight: 40px;
`;

const NoteText = styled.Text`
    marginTop: 10px;
    width: 100%;
`;

const DateText = styled.Text`
    color: ${Colors.mediumGray};
    alignSelf: flex-end;
`;

const HeadContainer = styled.View`
    borderBottomColor: ${Colors.black};
    borderBottomWidth: 1px;
    flexDirection: row;
`;

const mapStateToProps = ( state, ownProps ) => {
    return {
        id: ownProps.id,
        note: state.notesByID[ownProps.id]
    };
};

const mapDispatchToProp = ( dispatch, ownProps ) => {
    return {
        onPress: () => { console.log('TODO');  // TODO
        }
    };
};

interface INoteProps {
    id: number;
    note: IDataState;
    onPress: Function;
}

const Note: FC<INoteProps> = props => {
    return (
        <NoteContainer style={{backgroundColor: props.note.color}} activeOpacity={0.9} onLongPress={() => { props.onPress(); }} >
            <HeadContainer>
                <TitleText numberOfLines={1} >{props.note.title}</TitleText>
                <View style={{marginLeft: -30}}>
                    <DelButton id={props.id}/>
                </View>
            </HeadContainer>
            <NoteText>{props.note.text}</NoteText>
            <DateText>{props.note.date.toLocaleDateString()}</DateText>
        </NoteContainer>
    );
};

export default connect(mapStateToProps, mapDispatchToProp)(Note);