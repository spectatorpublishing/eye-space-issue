import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Section = ({articles, header}) => {

    return(
        <Wrapper>
            <Map><p>{header} map goes here</p></Map>
            <Articles>
                {articles.map(article => (
                    <p>{article.article_title}</p>
                ))}
            </Articles>
        </Wrapper>
    );
};

export default Section;

const Wrapper = styled.main`
    display: flex;

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

    @media (max-width: 768px) {
        flex-direction: row;
    }
`;