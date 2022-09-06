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
        <HomeContainer>
            <Top>
                <MobileNav/>
                <NavBar/>
            </Top>
            <MainTitle/>
            <LetterEditor/>
            <AllArticles/>
            <Credits/>
        </HomeContainer>
    )
};

export default Home;