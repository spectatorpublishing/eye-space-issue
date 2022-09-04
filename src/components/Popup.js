import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Container = styled.div`
    display: flex;
    margin: 2rem;
    flex-direction: row;
    width: 30rem;
    height: 10rem;
    position: absolute;
    top: 10%;
    z-index: 100;
    background-color: ${theme.colors.white};

    @media only screen and (max-width: 768px){
        align-items: center;
        border-top: none;
        min-width: 80%;
    }
`;

const Image = styled.div`
    display: flex;
    margin: auto 0 auto 0;
    position: relative;

    img {
        width: 10rem;   
        height: 10rem;    
        object-fit: cover;
    }

    @media only screen and (max-width: 768px){
        position: relative;
        img{
            width: 16rem;   
            height: 8rem; 
            filter: brightness(50%);
        }
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    justify-content: center;
    width: 20rem;    
    padding: 1rem;

    @media only screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        height: 100%;
        width: 15rem;
        margin: 0 0.5rem;
        position: absolute;
        color: white;
        text-align: center;
        z-index: 5;
    }
`;

const Title = styled.div`
    font-family: "Libre Baskerville";
    font-size: 1.125rem;
    font-weight: 700;

    @media only screen and (max-width: 768px){
        font-size: 1rem;
    }
`;

const Author = styled.div`
    margin-top: 1rem;
    font-family: "Inter";
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Popup = ({ link, title, author, image }) => {
    return (
        <Container>
            <Column>
                <Image>
                    <img src={image} />
                </Image>
            </Column>
            <Text>
                <Title>{title}</Title>
                <Author>{author}</Author>
            </Text>
        </Container>
    )
};

export default Popup;