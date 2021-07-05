import React, { Fragment } from "react";
import StoneWhaleBeach from './StoneWhaleBeach';
import { Wrap, Mask, Container, Left, Right,Text
 ,Paragrah, NumberText, Item, Number, Title } from '../styles/noDistance';

class NoDistance extends React.Component{
    render(){
        return (
            <Fragment>
            <Wrap>
              <Mask> 
                  <Container>
                    <Left></Left>
                    <Right>
                        <Text>
                         No Distance is Too Far
                        </Text>
                        <Paragrah>
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit laborum.
                        </Paragrah>
                    </Right>
                  </Container>
                  <NumberText>
                        <Item>
                            <Number>102</Number>
                            <Title>Destinations</Title>
                         </Item>
                        <Item>
                            <Number>500</Number>
                            <Title>Packages</Title>
                         </Item>
                         <Item>
                            <Number>75</Number>
                            <Title>Staff members</Title>
                         </Item>
                         <Item>
                            <Number>20</Number>
                            <Title>Years of Experiences</Title>
                         </Item>
                    </NumberText>
              </Mask>
            </Wrap>
            <StoneWhaleBeach />
            </Fragment>
        )
    }
}

export default NoDistance;
