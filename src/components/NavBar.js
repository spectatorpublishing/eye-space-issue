import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import { sections } from '../data/sections';
import { Link } from 'react-router-dom';
import theme from '../theme';

const Container = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 768px){

    }
`;

const MenuItem = styled.div`
    padding: 0.5rem 1rem;

    a {
        text-decoration: none;
        color: ${theme.colors.black};
    }
`;

const EyeLogo = styled.div`
    height: 6rem;
    width: 6rem;

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