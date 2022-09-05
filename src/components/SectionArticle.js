import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem;
    border-top: 1px solid white;
    padding: 1rem;

    @media only screen and (max-width: 768px){
        padding: 1rem 0 1rem 1rem;
        align-items: center;
        border-top: none;
    }
`;

const Wrapper = styled.div`
    a {
        color: black;
        text-decoration: none;
    }
`;

const Image = styled.div`
    display: flex;
    margin: auto 0 auto 0;
    position: relative;

    img {
        width: 9rem;   
        height: 9rem;    
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
    margin-left: 2rem;
    justify-content: center;
    width: 20rem;    

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
        font-size: 0.875rem;
    }
`;

const Author = styled.div`
    margin-top: 1rem;
    font-family: "Inter";
    @media only screen and (max-width: 768px){
        font-size: 0.875rem;
        margin-top: 0.5rem;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const SectionArticle = ({ link, title, author, image }) => {
    let isMobile = window.innerWidth <= 768;

    if (isMobile) {
        return (
            <Wrapper>
                <a href={link} target="_blank">
                    <Container >
                        <Column>
                            <Image>
                                <img src={image} />
                                <Text>
                                    <Title>{title}</Title>
                                    <Author>{author}</Author>
                                </Text>
                            </Image>
                        </Column>
                    </Container>
                </a>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <a href={link} target="_blank">
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
            </a>
        </Wrapper>
    )
};

export default SectionArticle;