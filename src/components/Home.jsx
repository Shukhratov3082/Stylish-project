import React, { useEffect } from 'react';
import styled from 'styled-components';
import Moon from './images/moon.png'
import Stars from './images/stars.png'
import Tog from './images/mountain.png'
const Home = () => {

    useEffect(() => {
        window.addEventListener('scroll', function () {
            const value = window.scrollY
            const MoonImg = document.querySelector('#MoonImg')
            const StarsImg = document.querySelector("#StarsImg")
            const text = document.querySelector('#text')


            MoonImg.style.top = value * 0.5 + 'px';
            MoonImg.style.left = value * 1.05 + 'px';
            StarsImg.style.left = value * 1.05 + 'px';
            text.style.marginRight = value * 4 + 'px'
            text.style.top = value * 0.05 + 'px;'

        })

    }, [])



    return (
        <Wrapper id='home'>

            <img id='MoonImg' src={Moon} alt="" />
            <img id='StarsImg' src={Stars} alt="" />
            <img id='FootImg' src={Tog} alt="" />
            <h2 id='text'>HI Welcome <br /> To WebSite</h2>


        </Wrapper>
    );
}

export default Home;
const Wrapper = styled.div`
width: 100%;
height: 100vh;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(0deg, #191540 6%, #000000 78%);
position: relative;

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    #MoonImg{
        z-index: 2;
        
        mix-blend-mode: screen;
    } 
    #StarsImg{
      transform: translateX(-60px);
    }
    #FootImg{
        z-index: 3;
    }


    h2{
        width: 375px;
        position: absolute;
        padding: 10px 12px;
        right: -350px;
        top: 70%;
        color: mediumspringgreen;
        background: #ffffff2b;
        border-radius: 20px;
        box-shadow: 0 0 20px 8px #000;
        font-size: 60px;
        z-index: 9;
    }
  
    
`
