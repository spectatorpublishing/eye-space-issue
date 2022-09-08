import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: top;
    width: 100%;
    margin: auto;
    height: 65rem;

    background:url(https://eye-space.s3.amazonaws.com/Main_Image_Placeholder.png);
    background-size: cover;
    background-position: center;

    @media only screen and (max-width: 768px){
        padding: 1rem;
        width: 20rem;
    }

`

const Title = styled.div`
    display: flex;
    padding-top: 20rem;
    text-align: center;
    a {
        color: ${theme.colors.darkBrown};
        font-family: "Libre Baskerville";
        font-size: 4rem;
    }
`;

const MainTitle = ({ }) => {
    return (
        <Container>
            <Title>
                <a>THE SPACE ISSUE</a>
            </Title> 
        </Container>
    )
};

export default MainTitle;