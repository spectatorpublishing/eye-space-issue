import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;

    color: ${theme.colors.titleBlack};
    font-family: "Libre Baskerville";
    @media only screen and (max-width: 768px){

    }
`;

const Title = styled.div`
    width: 60%;
    padding-bottom: 3rem;
    font-weight: 400;
    font-size: 3rem;
    text-align: center;
    @media only screen and (max-width: 768px){
        font-weight: 400;
        font-size: 2rem;
    }
`;

const CreditsTitle = styled.div`
    padding: 2rem 0 1rem;
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    text-align: center;
`;

const CreditsBody = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    color: ${theme.colors.black};
    text-align: left;
    h2 {  
        font-weight: 700;
        font-size: 1.2rem;
        padding: .5rem 0 0;
    }
    p {
        font-family: "Barlow";
        font-weight: 400;
        font-size: 1.2rem;
        line-height: .5rem;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const SubDiv = styled.div`
    width: 30%;
    @media only screen and (max-width: 768px){
        width: 60%;
        padding-left: 20%;
    }
`;

const Credits = ({ }) => {
    return (
        <Container>
            <Title>The Columbia Daily Spectator Staff Who Made This Issue Possible</Title>
            <CreditsTitle>Credits</CreditsTitle>
            <CreditsBody>
                <Row>
                    {/* TODO: Add in data */}
                    <SubDiv>
                        <h2>Corporate Board</h2>
                        <p>Name 1</p>
                        <p>Name 2</p>
                    </SubDiv>
                    <SubDiv>
                        <h2>Corporate Board</h2>
                        <p>Name 1</p>
                    </SubDiv>
                    <SubDiv>
                        <h2>Corporate Board</h2>
                        <p>Name 1</p>
                    </SubDiv>
                    <SubDiv>
                        <h2>Corporate Board</h2>
                        <p>Name 1</p>
                    </SubDiv>
                    <SubDiv>
                        <h2>Corporate Board</h2>
                        <p>Name 1</p>
                    </SubDiv>
                    <SubDiv>
                        <h2>Corporate Board</h2>
                        <p>Name 1</p>
                    </SubDiv>
                </Row>
            </CreditsBody>
        </Container>
    )
};

export default Credits;