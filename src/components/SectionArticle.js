import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem;
    border-top: 1px solid white;

    @media only screen and (max-width: 768px){
        padding: 1rem;
        align-items: center;
        border-top: none;
        min-width: 80%;
    }
`;

const Image = styled.div`
    display: flex;

    img {
        width: 9rem;    
        object-fit: contain;
        @media only screen and (max-width: 768px){
            width: 9rem;    
        }
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    width: 12rem;    

    @media only screen and (max-width: 768px){
        margin: 0 0 0 1rem;
        width: 100%;    
        text-align: center;
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

const SectionArticle = ({ link, title, author, image }) => {
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

export default SectionArticle;