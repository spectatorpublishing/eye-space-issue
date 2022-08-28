import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import MainTitle from '../components/MainTitle';
import LetterEditor from '../components/LetterEditor';
import AllArticles from '../components/AllArticles';
import Credits from '../components/Credits';
import theme from '../theme';

const HomeContainer = styled.div`
    @media only screen and (max-width: 768px){

    }
`;

const Home = ({ }) => {
    return (
        <HomeContainer>
            <MainTitle/>
            <LetterEditor/>
            <AllArticles/>
            <Credits/>
        </HomeContainer>
    )
};

export default Home;