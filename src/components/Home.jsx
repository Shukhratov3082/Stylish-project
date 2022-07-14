import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

const Home = () => {
    return (
        <Wrapper id='home'>
            <h2>Home</h2>
        </Wrapper>
    );
}

export default Home;
const Wrapper = styled.div`
width: 100%;
height: 800px;
color: white;
display: flex;
position: relative;
align-items: center;
justify-content: center;
background-color: yellow;
z-index: 1;
.Spline{
    position: absolute;
    top: 0;
    z-index: 2;
    left: 0;
}
    
`
