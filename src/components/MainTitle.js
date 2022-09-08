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

    background:url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/6Z6JL5A2OREHXI6IO444H5TTXY.gif);
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
    text-shadow: 2px 2px ${theme.colors.tan};

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