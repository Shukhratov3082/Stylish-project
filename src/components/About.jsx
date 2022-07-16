import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <Wrapper id='about'>
            <h2>About</h2>
        </Wrapper>
    );
}

export default About;
const Wrapper = styled.section`
width: 100%;
height: 800px;
z-index: 2;
display: flex;
align-items: center;
justify-content: center;
background: #131121;

&::before{
    content: '';
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #131121,transparent);
    z-index: 10;
}


    
`
