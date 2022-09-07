import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import MainTitle from '../components/MainTitle';
import LetterEditor from '../components/LetterEditor';
import AllArticles from '../components/AllArticles';
import Credits from '../components/Credits';
import theme from '../theme';
import NavBar from '../components/NavBar';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

const HomeContainer = styled.div`
    @media only screen and (max-width: 768px){

    }
`;

const Home = ({ }) => {
    return (
        <Wrapper>
            <NavBar/>
            <HomeContainer>
                <MainTitle/>
                <LetterEditor/>
                <AllArticles/>
                <Credits/>
            </HomeContainer>
        </Wrapper>
    )
};

export default Home;