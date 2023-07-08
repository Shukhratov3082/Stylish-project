import React from 'react';
import styled from 'styled-components'
const Code = () => {
    return (
        <Wrapper id='code'>
            <h2>Code</h2>
            <div className='s'>
                <div>1d</div>
                <div>2100%d</div>
                <div>3d</div>
            </div>
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
        div{
            width: 460px;
            height: 100%;
            background-color: red;
            flex: none;
            scroll-snap-align: start;
        }
    }

    
`