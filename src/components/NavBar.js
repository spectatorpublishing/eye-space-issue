import React from 'react';
import styled from 'styled-components';

import { device } from '../device';
import { sections } from '../data/sections';
import { Link } from 'react-router-dom';
import theme from '../theme';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3rem 0 0;

    height: 4.5rem;
    width: 100%;
    background: ${theme.colors.darkBrown};

    @media only screen and (max-width: 768px){
        display: none;
    }
`;

const MenuItem = styled.div`
    padding: 0.5rem 1rem;
    height: 3rem;
    witdh: 100%;
    display: flex;
    align-items: center;
    a {
        text-decoration:${props => props.current ? 'underline' : 'none'};
        text-underline-offset: 5px;
        color: ${theme.colors.tan};
        font-family: "Libre Baskerville";
        font-size: 1.25rem;

    }
`;

const EyeLogo = styled.div`
    height: 8rem;
    width: 8rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;

    img {
        max-width: 100%;
        height: auto;
    }

    @media only screen and (max-width: 768px){
        height: 3rem;
        width: 3rem;
    }
`;

const Sections = styled.div`
    display: flex;
    margin-left: 20%;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

const NavBar = ({ }) => {
    return (
        <Container>
            <EyeLogo>
                <a href="https://www.columbiaspectator.com/eye" style={{}}>
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WZKAIDANZVFV5PH57SCIT7XVIE"/>
                </a>                
            </EyeLogo>
            <Sections>
                {sections.map(section => (
                    <MenuItem current={window.location.pathname === section.url}>
                        <Link to={section.url}>{section.title}</Link>
                    </MenuItem>
                ))}
            </Sections>
        </Container>
    )
};

export default NavBar;