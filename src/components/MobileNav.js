import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { fallDown as Menu } from 'react-burger-menu';

import { device } from '../device';
import { sections } from '../data/sections';
import { Link } from 'react-router-dom';
import theme from '../theme';


const Container = styled.div`
    width: 100%;
    @media only screen and (min-width: 768px){
        display: none;
    }
`;

const TopBar = styled.div`
    display: flex;
    justify-content: ${props => props.open ? 'flex-end' : 'space-between'};
    background: ${theme.colors.darkBrown};
    height: 3rem; 
`;

const MenuItem = styled.div`
    display: flex;
    text-align: center;
    padding: 0.5rem 1rem;
    background: ${props => props.current ? theme.colors.tan :theme.colors.darkBrown};
    border: 0.5rem solid ${theme.colors.darkBrown};

    a {
        text-decoration: none;
        color: ${props => props.current ? theme.colors.darkBrown :theme.colors.tan};
        font-family: "Libre Baskerville";
        font-size: 1rem;
    }
`;

const EyeLogo = styled.div`
    z-index: 1000;
    height: 5rem;
    width: 5rem;

    img {
        max-width: 100%;
        height: auto;
    }
`;

const HamburgerWrapper = styled.div`
    padding: .75rem;
`;

const CurrentTab = styled.div`
    display: flex;
    color: ${theme.colors.tan};
    font-family: "Libre Baskerville";
    font-size: 1.25rem;
    padding-top: 0.75rem;
`;

const MobileNav = ({ }) => {

    const [open, setOpen] = React.useState(false);
    
    function handleClick() {
        setOpen(!open)
    }

    // to fix bug where menu opens where clicking anywhere, style burger
    // but we want to use the other hamburger's icon so make these transparent
    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '0px',
          height: '0px',
          right: '1rem',
          top: '1rem'
        },
        bmBurgerBars: {
          background: '#00000000'
        },
        bmCrossButton: {
          width: '0px',
          height: '0px',
        },
        bmCross: {
          background: '#00000000'
        },
      }

    return (
        <Container>
            <TopBar open={open}>
                {!open &&
                <EyeLogo>
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WZKAIDANZVFV5PH57SCIT7XVIE"/>
                </EyeLogo>
                }

                {!open &&
                    sections.map(section => {
                        if(window.location.pathname === section.url) {
                            return <CurrentTab>
                                {section.title}
                            </CurrentTab>
                        }
                    }
                    )      
                }
                
                <HamburgerWrapper>
                    <HamburgerMenu
                        isOpen={open}
                        menuClicked={() => handleClick()}
                        width={30}
                        height={20}
                        strokeWidth={5}
                        rotate={0}
                        color='white'
                        borderRadius={0}
                        animationDuration={0.5}
                        zIndex={100}
                        className="over"
                    />
                </HamburgerWrapper>
            </TopBar>

            <Menu isOpen={open} width={'100vw'} styles={styles}>
                {sections.map(section => (
                    <MenuItem current={window.location.pathname === section.url} >
                        <Link to={section.url}>{section.title}</Link>
                    </MenuItem>
                ))}    
            </Menu>
        </Container>
    )
};

export default MobileNav;