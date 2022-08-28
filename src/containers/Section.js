import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Section = ({articles, header}) => {

    return(
        <main>
            <div>{header}</div>
        </main>
    );
};

export default Section;

const Mobile = styled.div`
    display: flex;
    @media (min-width: 769px) {
        display: none;
    }
`;

const Desktop = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;