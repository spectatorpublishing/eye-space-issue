import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import SectionArticle from '../components/SectionArticle';
import NavBar from "../components/NavBar";
import MobileNav from "../components/MobileNav";

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Map = styled.div`
    width: 90%;

    @media (max-width: 768px) {
        width: 100vw;
    }
`;

const Articles = styled.div`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.lightBrown};

    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        overflow: scroll;
    }
`;

const Top = styled.div`
    display: flex;
    width: 100%;
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 768px){

    }
`;

const Section = ({ articles, header }) => {
    return (
        <Wrapper>
            <Top>
                <MobileNav/>
                <NavBar/>
            </Top>
            <Bottom>
                <Map><p>{header} map goes here</p></Map>
                <Articles>
                    {articles.map(article => (
                        <SectionArticle
                            link={article.article_link}
                            title={article.article_title}
                            author={article.article_authors}
                            image={article.image_url}
                        />
                    ))}
                </Articles>
            </Bottom>
        </Wrapper>
    );
};

export default Section;