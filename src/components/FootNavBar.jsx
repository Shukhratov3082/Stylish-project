import React from 'react';
import styled from 'styled-components';
import { FcAbout } from 'react-icons/fc'
import { IoHome } from 'react-icons/io5'
import { FaCode } from 'react-icons/fa'

const FootNavBar = () => {
    return (
        <Wrapper>
            <a href="#home"> <IoHome className='Icon IconHome' /></a>
            <a href="#about"> <FcAbout className='Icon' /></a>
            <a href="#code"><FaCode className='Icon' /></a>

        </Wrapper>
    );
}

export default FootNavBar;

const Wrapper = styled.div`
    position: fixed;
    left: 50%;
    bottom: 2rem;
    background-color: rgba(0,0,0,0.3);
    width: 200px;
    display: flex;
    justify-content: space-between;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    transform: translateX(-50%);
    gap: 0.8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);
    a{
        width: 30px;
        height: 30px;
       .Icon{
           font-size: 30px;
           color: #00fd2b;
           &IconHome{
            color: red;
           }

          &:active{
            color: black;
          }
        }

    }
`
