import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import SectionArticle from '../components/SectionArticle';
import Popup from '../components/Popup';
import NavBar from '../components/NavBar';
import { lenape_pins, columbia_pins, off_campus_pins, present_day_pins } from '../data/articles';

const Wrapper = styled.main`
    display: flex;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const SectionContainer = styled.div`
    display: flex;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background-color: ${theme.colors.tan};
    justify-items: space-between;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Image = styled.div`
    position: relative;
`;

const Map = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
        max-height: calc(100vh - 6rem);
    }

    @media (max-width: 768px) {
        img {
            max-height: calc(100vh - 16rem);
        }
    }
        /* max-width: 100%; */
    }
`;

const Articles = styled.div`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.lightBrown};
    overflow: scroll;
    width: 50rem;

    @media (max-width: 768px) {
        flex-direction: row;
        min-height: 10rem;
        width: 100%;
        align-self: flex-end;
    }
`;

const pin_url = "https://eye-space.s3.amazonaws.com/Red_Pin.png";

const Pin = styled.div`
    position: absolute;
    cursor: pointer;
    width: 1rem;
    object-fit: cover;
    top: 41%;
    left: 39%;
    z-index: 100;
`;

const CustomPin = ({ id, top, left, url }) => {
    let top_percent = top + "%"
    let left_percent = left + "%"
    return (
        <Pin style={{ top: top_percent, left: left_percent }}> 
            <img src={pin_url} />
        </Pin>
    );
};


const Section = ({ articles, map_url, pins }) => {
	const [ id, setId ] = useState(-1);

    return (
        <Wrapper>
            <NavBar/>
            <SectionContainer>
                <Map>
                    <Image onClick={() => setId(id === -1 ? 0 : -1)}>
                        <img src={map_url} />
                        {pins ? pins.map( (pin, i) => (
                            <CustomPin top={pin.top} left={pin.left}         
                            onClick={() => setId(i)}>
                            </CustomPin>
                        )) : null}
                    </Image>
                    {id === -1 ? null : <Popup
                            link={articles[id].article_link}
                            title={articles[id].article_title}
                            author={articles[id].article_authors}
                            image={articles[id].image_url}
                            top={pins[id].top}
                            left={pins[id].left}
                    />}
                </Map>
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
            </SectionContainer>
        </Wrapper>
    );
};

export default Section;