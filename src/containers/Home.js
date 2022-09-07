import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import MainTitle from '../components/MainTitle';
import LetterEditor from '../components/LetterEditor';
import AllArticles from '../components/AllArticles';
import Credits from '../components/Credits';
import NavBar from "../components/NavBar";
import MobileNav from "../components/MobileNav";
import theme from '../theme';
import NavBar from '../components/NavBar';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 768px){

    }
`;

const Top = styled.div`
    display: flex;
    width: 100%;
`;

const Home = ({ }) => {
    return (
        <Wrapper>
            <Top>
                <MobileNav/>
                <NavBar/>
            </Top>
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