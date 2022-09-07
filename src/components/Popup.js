import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 30rem;
    height: 10rem;
    position: absolute;
    z-index: 100;
    background-color: ${theme.colors.white};
    transform: translate(-50%, -140%); // anchor point at bottom of pin
    @media (max-width: 768px) {
        transform: translate(0, 0); // anchor point at bottom of pin
        margin: 1rem;
        height: 8rem;
        width: calc(100% - 2rem);
    }
`;

const Wrapper = styled.div`
    a {
        color: black;
        text-decoration: none;
    }
`;

const Triangle = styled.div`
    position: absolute;
    width: 0; 
    height: 0; 
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid white;
    z-index: 200;
    top: 10rem;
    left: 15rem;
    transform: translate(-50%,0%); // anchor point at bottom of pin
    @media (max-width: 768px) {
        display: none;
    }
`;

const Image = styled.div`
    display: flex;
    margin: auto 0 auto 0;

    img {
        width: 10rem;   
        height: 10rem;    
        object-fit: cover;
    }

    @media (max-width: 768px) {
        img {
            width: 8rem;   
            height: 8rem;    
        }
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    justify-content: center;
    width: calc(100% - 11rem);
    padding: 1rem;
`;

const Title = styled.div`
    font-family: "Libre Baskerville";
    font-size: 1.125rem;
    font-weight: 700;

    @media only screen and (max-width: 768px){
        font-size: 0.875rem;
    }
`;

const Author = styled.div`
    margin-top: 0.5rem;
    font-family: "Inter";
    font-size: 0.875rem;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Popup = ({ link, title, author, image, top, left }) => {
    let top_percent = top + "%"
    let left_percent = left + "%"
    let zero_percent = 0 + "%"

    return (
        <Wrapper>
            <a href={link} target="_blank">
                <Container style={{ top: window.innerWidth <= 768 ? zero_percent : top_percent, 
                                    left: window.innerWidth <= 768 ? zero_percent : left_percent }}>
                        <Column>
                            <Image>
                                <img src={image} />
                            </Image>
                        </Column>
                        <Text>
                            <Title>{title}</Title>
                            <Author>{author}</Author>
                        </Text>
                        <Triangle></Triangle>
                </Container>
            </a>
        </Wrapper>
    )
};

export default Popup;