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
        text-decoration: none;
        color: ${theme.colors.tan};
        font-family: "Libre Baskerville";
        font-size: 1.25rem;

    }
    a:hover {
        text-decoration: underline;
        text-underline-offset: 5px;
    }
`;

const EyeLogo = styled.div`
    height: 8rem;
    width: 8rem;

    img {
        max-width: 100%;
        height: auto;
    }
`

const NavBar = ({ }) => {
    return (
        <Container>
                <EyeLogo>
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WZKAIDANZVFV5PH57SCIT7XVIE"/>
                </EyeLogo>
                {sections.map(section => (
                    <MenuItem>
                        <Link to={section.url}>{section.title}</Link>
                    </MenuItem>
                ))}
        </Container>
    )
};

export default NavBar;