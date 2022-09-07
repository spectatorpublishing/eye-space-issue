import React from 'react';
import styled from 'styled-components';
import { illos } from '../data/illos_only';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
`;

const IlloWrapper = styled.div`
    width: 50%;
    margin: 1rem auto 3rem auto;
`

const Location = styled.h2`
    text-align: center;
`

const Image = styled.div`
    display: flex;
    width: 100%;

    img {
        width: 100%;
        object-fit: contain;
    }
`

const ByLine = styled.div`
    margin-top: 0.5rem;
    color: grey;
`

const Description = styled.div`
    margin-top: 1rem;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.5rem;
`

const Illo = ({location, image, illustrator, description}) => {
    return (
        <IlloWrapper>
            <Location>{location}</Location>
            <Image><img src={image}/></Image>
            <ByLine>Illustration by {illustrator}</ByLine>
            <Description><span style={{fontWeight: "700"}}>{illustrator.split(" ")[0]}: </span><span>{description}</span></Description>
        </IlloWrapper>
    );
}

const Illos = ({ }) => {
    return (
        <Wrapper>
           {illos.map((illo, id) => (
               <Illo
                id={String.valueOf(id)}
                location={illo.article_title}
                image={illo.image_url}
                illustrator={illo.article_authors}
                description={illo.description}
               />
           ))}
        </Wrapper>
    )
};

export default Illos;