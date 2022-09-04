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
    text-align: center;
    @media only screen and (max-width: ${theme.sizes.mobile}){
        text-align: left;
    }
`;

const CreditsWrapper = styled.div`
    align-self: flex-start;
    padding-top: 3rem;
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
                <BodyText>{PLACEHOLDER}</BodyText>
                <CreditsWrapper>
                    <Credit>Name</Credit>
                    <TagLine>Editor in Chief</TagLine>
                    <Credit>Name</Credit>
                    <TagLine>Managing Editor</TagLine>
                </CreditsWrapper>
            </BodyContainer>
        </Container>
    )
};

export default LetterEditor;