import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import SectionArticle from '../components/SectionArticle';
import NavBar from "../components/NavBar";
import MobileNav from "../components/MobileNav";
import Popup from '../components/Popup';

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
        object-fit: cover;
        max-height: calc(100vh - 4.5rem);
    }

    @media (max-width: 768px) {
        img {
            max-height: calc(100vh - 13rem);
        }
    }
`;

const Articles = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.lightBrown};
    overflow: scroll;
    width: 50rem;

    @media (max-width: 768px) {
        flex-direction: row;
        min-height: 10rem;
        width: 100%;
        align-self: flex-end;
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

const red_pin_url = "https://eye-space.s3.amazonaws.com/Blue_Pin.png";
const blue_pin_url = "https://eye-space.s3.amazonaws.com/Red_Pin.png";

const Pin = styled.div`
    position: absolute;
    cursor: pointer;
    transform: translate(-50%, -100%); // anchor point at bottom of pin
    width: 1.5rem;
    object-fit: cover;
    top: 41%;
    left: 39%;
    z-index: 100;
    @media (max-width: 768px) {
        width: 1rem;
    }
`;

const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const CustomPin = ({ id, top, left }) => {
    let top_percent = top + "%"
    let left_percent = left + "%"
    return (
        <Pin style={{ top: top_percent, left: left_percent }}> 
            <img src={ id < 7 ? red_pin_url : blue_pin_url} />
        </Pin>
    );
};

const Section = ({ articles, map_url, pins }) => {
	const [ id, setId ] = useState(-1);
    let isMobile = window.innerWidth <= 768;

    return (
        <Wrapper>
            <Top>
                <MobileNav/>
                <NavBar/>
            </Top>
            <SectionContainer>
                    <Map>
                        <Modal onClick={() => { if (id !== -1) {setId(-1)}}}
                            style={{ display: id !== -1 ? "flex" : "none"}}
                            />
                        <Image>
                            <Modal onClick={() => { if (id !== -1) {setId(-1)}}}
                                style={{ display: id !== -1 ? "flex" : "none"}}
                                />
                            <img src={map_url} />
                            {pins ? pins.map( (pin, i) => (
                                <div onClick={() => setId(id !== i ? i : -1)}>
                                    <CustomPin top={pin.top} left={pin.left} id={i}         
                                        onClick={() => setId(i)}>
                                    </CustomPin>
                                </div>
                            )) : null}
                        {id === -1 ? null : isMobile ? null : <Popup
                                link={articles[id] ? articles[id].article_link : ""}
                                title={articles[id] ? articles[id].article_title : ""}
                                author={articles[id] ? articles[id].article_authors : ""}
                                image={articles[id] ? articles[id].image_url : ""}
                                description={articles[id] ? articles[id].description : ""}
                                isIllo={articles[id].isIllo}
                                top={pins[id] ? pins[id].top : 0}
                                left={pins[id] ?  pins[id].left : 0}
                        />}
                        </Image>
                        {id === -1 ? null : !isMobile ? null : <Popup
                                link={articles[id] ? articles[id].article_link : ""}
                                title={articles[id] ? articles[id].article_title : ""}
                                author={articles[id] ? articles[id].article_authors : ""}
                                image={articles[id] ? articles[id].image_url : ""}
                                description={articles[id] ? articles[id].description : ""}
                                isIllo={articles[id].isIllo}
                                top={pins[id] ? pins[id].top : 0}
                                left={pins[id] ?  pins[id].left : 0}
                        />}
                    </Map>

                <Articles>
                    {articles.map(article => (
                        <SectionArticle
                            link={article.article_link}
                            title={article.article_title}
                            author={article.article_authors}
                            image={article.image_url}
                            isIllo={article.isIllo}
                        />
                    ))}
                </Articles>
            </SectionContainer>
        </Wrapper>
    );
};

export default Section;