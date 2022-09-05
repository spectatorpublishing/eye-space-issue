import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { fallDown as Menu } from 'react-burger-menu';

import { device } from '../device';
import { sections } from '../data/sections';
import { Link } from 'react-router-dom';
import theme from '../theme';


const Container = styled.div`
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
    border: 0.75rem solid ${theme.colors.darkBrown};

    a {
        text-decoration: none;
        color: ${props => props.current ? theme.colors.darkBrown :theme.colors.tan};
        font-family: "Libre Baskerville";
        font-size: 1rem;
    }
`;

const EyeLogo = styled.div`
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
    font-size: 1rem;
`;

const MobileNav = ({ current }) => {

    const [open, setOpen] = React.useState(false);
    
    function handleClick() {
        console.log(open)
        setOpen(!open)
    }

    return (
        <Container>
            <TopBar open={open}>
                {!open &&
                <EyeLogo>
                    <img src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/WZKAIDANZVFV5PH57SCIT7XVIE"/>
                </EyeLogo>
                }

                {/* <CurrentTab>
                    test
                </CurrentTab> */}

                {!open &&
                    sections.map(section => {
                        if(current === section.title) {
                            // <CurrentTab>
                            //     {section.title}
                            // </CurrentTab>
                            // <CurrentTab>
                            //     test
                            // </CurrentTab>
                            console.log("wjfjraf");
                            <MenuItem current={current === section.title} >
                                <Link to={section.url}>{section.title}</Link>
                            </MenuItem>
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

            <Menu isOpen={open} width={'100vw'} onClose={handleClick} onOpen={handleClick}>
                {sections.map(section => (
                    <MenuItem current={current === section.title} >
                        <Link to={section.url}>{section.title}</Link>
                    </MenuItem>
                ))}    
            </Menu>
        </Container>
    )
};

export default MobileNav;