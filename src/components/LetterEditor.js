import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';
import  { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PLACEHOLDER = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et neque ex. Vestibulum vitae lorem at dui pellentesque aliquam. Aenean mi massa, blandit eu faucibus in, dapibus in nisi. Vivamus consequat, tortor ac molestie dignissim, nunc purus consequat sem, in tincidunt enim purus eu massa. In hac habitasse platea dictumst. Duis sit amet erat vel dui semper cursus. Quisque vitae vulputate lacus. Nam risus risus, hendrerit in ullamcorper sed, viverra eu arcu. Ut euismod, risus non consectetur ultrices, ante ipsum elementum augue, sit amet commodo orci quam tempus felis. Sed et lacus id turpis venenatis vehicula. Nullam sed eros id diam suscipit tincidunt sed quis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at velit in massa ultricies ultrices.`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 2px solid ${theme.colors.darkBrown};
    border-bottom: 2px solid ${theme.colors.darkBrown};
    @media only screen and (max-width: ${theme.sizes.mobile}){
    }
`;

const TitleContainer = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.darkBrown};
    @media only screen and (max-width: ${theme.sizes.mobile}){
        padding: 1rem 0;
    }
`;

const TitleText = styled.h1`
    text-align: center;
    margin-right: 2.5rem;

    @media only screen and (max-width: ${theme.sizes.tablet}){
        font-size: 30px;
        margin-right: 1.5rem;
    }
    @media only screen and (max-width: ${theme.sizes.mobile}){
        width: 75%;
        margin-right: 0.5rem;
    }
`;

const BodyContainer = styled.div`
    display: ${props => props.open ? "flex" : "none"};
    height: ${props => props.open ? "fit-content" : "0"};
    opacity: ${props => props.open ? "1" : "0"};
    flex-direction: column;
    color: ${theme.colors.darkBrown};
    padding: 3.5rem 12rem;
    margin: 0;
    transition: all ease-in-out .5s;
    border-top: 2px solid ${theme.colors.darkBrown};
    
    @media only screen and (max-width: ${theme.sizes.mobile}){
        padding: 1rem;
    }
`;

const BodyText = styled.p`
    text-align: left;
    @media only screen and (max-width: ${theme.sizes.mobile}){
        text-align: left;
        font-size: 2rem;
    }
`;

const CreditsWrapper = styled.div`
    align-self: flex-start;
    padding-top: 0rem;
`;

const Credit = styled.h3`
    margin: 0;
`;

const TagLine = styled.p`
    margin-top: 0;
`;

const Arrow = styled.div`
    transform: ${props => props.upside ? "none" : "rotateZ(-180deg)"};
    transition: transform ease-in-out .5s;
    cursor: pointer; 
`;

const LetterEditor = ({ }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    function handleClick() {
        console.log("clicked");
        setIsOpen(!isOpen);
    }

    return (
        <Container>
            <TitleContainer>
                <TitleText>Letter from the Editor</TitleText>
                <Arrow onClick={handleClick} upside={isOpen}>
                    <FontAwesomeIcon icon={faArrowDown} size="2xl"></FontAwesomeIcon>
                </Arrow>
            </TitleContainer>
            <BodyContainer open={isOpen}>
                <BodyText>
                <p>Dear readers,</p>

                <p>Welcome to the Space Issue! This special project, presented by The Eye’s inaugural Archival Team, was borne of a curious urge to destabilize the limestone-and-brick solidity of Columbia’s campus. The halls we walk, the parks we enter (or don’t), the dorms and lounges we find community in—behind all of these seemingly-steady spaces are rich histories of activism, administrative strife, and constant renegotiations. Who is allowed to take up space on campus? Where does Columbia fit into the neighboring community? Why are we here?</p>

                <p>To explore these questions and uncover many more, our reporters have ventured into the depths of the archives, unfurling architectural spreads still marked with faded pencil notes and following the paper trails of past University presidents. From famous buildings like Butler Library and Lerner Hall, to integral community spaces like Morningside Park, the Stephen Donaldson LGBTQ Lounge, and the labyrinthine tunnels underground, we sought to understand how spaces on and around campus came to be and how they might evolve in the future. Allow us to transport you across a 268-year history as we draw out the dynamism behind Columbia’s campus through seven feature-length articles and a set of interactive archival maps.</p>

                <p>Before embarking on this journey, we must acknowledge that the Space Issue is just as much about what the archives can’t tell us as what they can. Midway through working on the issue this summer, we realized that in focusing on the “official” archives maintained by Spectator and the University, we had neglected to cover the biggest issue of space in Columbia’s history: the stolen Lenni-Lenape land upon which Columbia was built.</p>

                <p>Staff Writer Ann Vettikkal stepped up to research a history of Indigenous displacement scarcely documented; in her story, she centers the violent indifference of institutional memory by examining gaps in the archives. When building our interactive map display, we were faced with the challenge of situating the history of Indigenous land on an archival map. It was important for us to represent the foundational history of the land beneath the constructions of colonizers and their beneficiaries—but we couldn’t find any maps in the archives that visualized Manhattan in its original, uncolonized form. We realized the inherent restrictions of an archival approach when the archives themselves are colonized space, built to house a limited history while papering over others.</p>

                <p>In the face of archival limitations, our reporters have also worked to highlight living voices through exclusive interviews with the figures who have shaped history. A student expelled from Barnard for living with her boyfriend. Activists who stood in front of bulldozers that threatened to tear apart Morningside Park’s integrity. Tunnelers creeping underground into the most literal subculture of campus life. Indigenous students who in 2022 finally secured their own brownstone after years of advocacy.</p>

                <p>Our present-day map features beautiful artwork from Spectator’s Illustrations team, who collaborated with The Eye to highlight their own favorite places on campus. Colored by these artistic outlooks, the present-day map transposes the archival stories onto the daily reality of campus life. I invite you to explore the maps, peruse the photos and documents from the archives, and dive into the storied legacy that underlies Columbia. Above all, I hope this project gets you thinking about what it means to inhabit this campus and leave your own imprint. As a member of the Columbia community, you are deeply implicated in this issue of space.</p>

                <p>Warmly,</p>
                </BodyText>
                <CreditsWrapper>
                    <Credit>Annie Cheng</Credit>
                    <TagLine>Managing Editor of The Eye & Founder of the Archival Excavation Team</TagLine>
                </CreditsWrapper>
            </BodyContainer>
        </Container>
    )
};

export default LetterEditor;