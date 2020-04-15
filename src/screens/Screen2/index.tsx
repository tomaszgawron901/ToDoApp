import React, { FC} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constans/Colors';

const Container = styled.View`
    flex: 1;
    backgroundColor: ${Colors.darkGray};
`;

const CustomScrollView = styled.ScrollView`
    flex: 1;
    marginLeft: 5px;
    marginRight: 5px;
`;

const Title = styled.Text`
    color: ${Colors.white};
    fontSize: 30px;
`;

const InfoText = styled.Text`
    marginTop: 10px;
    alignItems: flex-start;
    color: ${Colors.gray};
    flexDirection: row;
    flexWrap: wrap;
`;

const FullImage = styled.Image `
    width: 100%;
    height: 200px;
    borderWidth: 2px;
    borderColor: ${Colors.gray};
    marginTop: 10px;
`;

const LeftImage = styled.Image`
    alignSelf: flex-start;
    width: 200px;
    height: 250px;
    borderWidth: 2px;
    borderColor: ${Colors.gray};
    marginTop: 10px;
`;

const RightImage = styled.Image`
    alignSelf: flex-end;
    width: 200px;
    height: 250px;
    borderWidth: 2px;
    borderColor: ${Colors.gray};
    marginTop: 10px;
`;

const Screen1 = () => {
        return (
            <Container>
                <CustomScrollView>
                    <Title>Flowers</Title>
                    <FullImage source={require('../../assets/Almond_blossom.jpg')}/>
                    <InfoText>Van Gogh painted several landscapes with flowers, including roses, lilacs, irises, and sunflowers. Some reflect his interests in the language of colour, and also in Japanese ukiyo-e. There are two series of dying sunflowers. The first was painted in Paris in 1887 and shows flowers lying on the ground. The second set was completed a year later in Arles and is of bouquets in a vase positioned in early morning light. Both are built from thickly layered paintwork, which, according to the London National Gallery, evoke the "texture of the seed-heads".</InfoText>
                    <LeftImage source={require('../../assets/pinkroses.jpg')}/>
                    <InfoText>In these series, Van Gogh was not preoccupied by his usual interest in filling his paintings with subjectivity and emotion; rather, the two series are intended to display his technical skill and working methods to Gauguin, who was about to visit. The 1888 paintings were created during a rare period of optimism for the artist. Vincent wrote to Theo in August 1888: "I'm painting with the gusto of a Marseillais eating bouillabaisse, which won't surprise you when it's a question of painting large sunflowers ... If I carry out this plan there'll be a dozen or so panels. The whole thing will therefore be a symphony in blue and yellow. I work on it all these mornings, from sunrise. Because the flowers wilt quickly and it's a matter of doing the whole thing in one go.</InfoText>
                    <RightImage source={require('../../assets/sunflowers.jpg')}/>
                    <InfoText>The sunflowers were painted to decorate the walls in anticipation of Gauguin's visit, and Van Gogh placed individual works around the Yellow House's guest room in Arles. Gauguin was deeply impressed and later acquired two of the Paris versions. After Gauguin's departure, Van Gogh imagined the two major versions of the sunflowers as wings of the Berceuse Triptych, and included them in his Les XX in Brussels exhibit. Today the major pieces of the series are among his best known, celebrated for the sickly connotations of the colour yellow and its tie-in with the Yellow House, the expressionism of the brush strokes, and their contrast against often dark backgrounds.</InfoText>
                </CustomScrollView>
            </Container>
        );
};

export default Screen1;