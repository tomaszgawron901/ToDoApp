import React, { FC, Component } from 'react';
import styled from 'styled-components/native';
import CustomButton from './CustomButton';
import { connect } from 'react-redux';

import Colors from '../../../constans/Colors';

const HeadContainer = styled.View`
    width: 100%;
    backgroundColor: ${Colors.mediumGray};
    border: solid 1px ${Colors.black};
`;

const Head: FC = () => {
    return (
        <HeadContainer>
            <CustomButton text={'←'} onPress={() => undefined}/>

            <CustomButton text={'☓'} onPress={() => undefined}/>
        </HeadContainer>
    );
};

export default Head;
