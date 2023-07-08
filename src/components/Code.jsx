import React from 'react';
import styled from 'styled-components'
const Code = () => {
    return (
        <Wrapper id='code'>
            <h2>Code</h2>
        </Wrapper>
    );
}

export default Code;
const Wrapper = styled.section`
width: 100%;
height: 800px;
display: flex;
align-items: center;
justify-content: center;
background: #131121;
color: white;

    h2{
        text-align: center;
        font-size: 50px;
        font-family: 'Kanit', sans-serif;
    }
    .s{
        width: 500px;
        height: 500px;
        display: flex;
        align-items: center;
        gap: 40px;
        scroll-snap-type: x mandatory;
        overflow-x: scroll;
        justify-content: center;
    }

    
`