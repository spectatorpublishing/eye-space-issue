import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';
import  { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
    width: 100%;
    @media only screen and (max-width: ${theme.sizes.mobile}){
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: baseline;
    color: ${theme.colors.titleBlack};
    @media only screen and (max-width: ${theme.sizes.mobile}){
    }
`;

const TitleText = styled.h1`
    font-family: 'Libre Baskerville';
    font-weight: 400;
    font-size: 50px;
    margin-right: 2.5rem;
    @media only screen and (max-width: ${theme.sizes.mobile}){
    }
`;

const LetterEditor = ({ }) => {
    return (
        <Container>
            <TitleContainer>
                <TitleText>Letter from the Editor</TitleText>
                <FontAwesomeIcon icon={faArrowDown} size="2xl"></FontAwesomeIcon>
            </TitleContainer>
        </Container>
    )
};

export default LetterEditor;