import React from 'react';
import styled from 'styled-components/macro';
import { device } from '../device';
import theme from '../theme';
import { present_day_articles } from '../data/articles';
import { HashLink } from 'react-router-hash-link';

const ArticlesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 80%;
    grid-auto-rows: 1fr;
    margin: 1rem auto;

    @media only screen and (max-width: 768px){
        grid-template-columns: repeat(1,1fr);
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0 1rem 1rem;
    align-items: center;
`;

const TitleText = styled.h1`
    text-align: center;
    margin-right: 2.5rem;
    margin-top: 6rem;
    color: ${theme.colors.darkBrown};

    @media only screen and (max-width: ${theme.sizes.tablet}){
        font-size: 30px;
        margin: 2rem auto 0rem auto;
    }
`;

const Wrapper = styled.div`
    a {
        color: black;
        text-decoration: none;
    }

    margin: 1rem;
`;

const Image = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0 auto 0;
    position: relative;

    width: 100%;   
    height: 100%; 

        img{
            width: 100%;   
            height: 100%; 
            filter: brightness(50%);
            object-fit: cover;
        }
    }
`;

const Text = styled.div`
    
    display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 15rem;
        margin: 0 auto;
        position: absolute;
        color: white;
        text-align: center;
        margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
        z-index: 5;
        left: 10%;

    @media only screen and (max-width: ${theme.sizes.mobile}){
        width: 15rem;
    }
`;

const Title = styled.div`
    font-family: "Libre Baskerville";
    font-size: 1.5rem;
    font-weight: 700;

    @media only screen and (max-width: ${theme.sizes.tablet}){
        font-size: 1rem;
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

const Article = ({ link, image, title, author, isIllo }) => {
    return (
        <Wrapper>
            {isIllo ? 
            <HashLink smooth to={'/illos#' + title.split(" ")[0]}>
                <Image>
                    <img src={image} />
                    <Text>
                        <Title>{title}</Title>
                        <Author>{author}</Author>
                    </Text>
                </Image>
            </HashLink>
            : <a href={link} target="_blank">
                <Image>
                    <img src={image} />
                    <Text>
                        <Title>{title}</Title>
                        <Author>{author}</Author>
                    </Text>
                </Image>
            </a>}
        </Wrapper>
    )
};

const AllArticles = ({ }) => {
    return (
        <>
        <TitleText>Articles</TitleText>
        <ArticlesContainer>
            {present_day_articles.map(article => (
                <Article link={article.article_link} image={article.image_url} title={article.article_title} author={article.article_authors} isIllo={article.isIllo}/>
            ))}
        </ArticlesContainer>
        </>
    )
};

export default AllArticles;