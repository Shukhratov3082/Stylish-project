import React from 'react';
import styled from 'styled-components';
import { FcAbout } from 'react-icons/fc'
import { FcHome } from 'react-icons/fc'
import { FaCode } from 'react-icons/fa'
import './Home';
import './Code';
import './About';

const FootNavBar = () => {

    window.addEventListener('scroll', function () {
        const header = document.querySelector('footer');

        header.classList.toggle('FootShow', window.scrollY > 80);
    })




    return (
        <Wrapper >
            <footer>
                <a href="#home"> <FcHome className='Icon FcHome' /> </a>
                <a href="#about"> <FcAbout className='Icon' /></a>
                <a href="#code"><FaCode className='Icon' /></a>
            </footer>
        </Wrapper>
    );
}

export default FootNavBar;

const Wrapper = styled.div`
footer{
    width: 200px;
    display: flex;
    position: fixed;
    left: 50%;
    transition:  .3s ease-in-out;
    padding: 0.7rem 1.7rem;
    justify-content: space-between;
    transform: translateX(-50%);
    gap: 0.8rem;
    background-color:rgb(255 255 255 / 18%);
    border-radius: 3rem;
    backdrop-filter: blur(15px);
    bottom: -4rem;
    z-index: 20;
    
    a{
        width: 30px;
        height: 30px;
 
        .Icon{
           transition:  .3s cubic-bezier(0.42, 0, 0.38, 1.53);
           font-size: 30px;
           color: #fcfcfc;
          &:hover{
            transform: translateY(-6px);
          }
          &:active{
            filter: blur(2px);
          }
        }
    }   
}
.FootShow{
    bottom: 2rem;
}
`
