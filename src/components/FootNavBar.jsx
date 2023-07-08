import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FcAbout } from 'react-icons/fc'
import { FcHome } from 'react-icons/fc'
import { FaCode } from 'react-icons/fa'
import './Home';
import './Code';
import './About';

const FootNavBar = () => {
    const [activeNav, setActiveNav] = useState('')
    useEffect(() => {
        const links = document.querySelectorAll('#FootLinks')
        const all = document.querySelectorAll('section')

        function activeMenu() {
            let len = all.length;
            while (--len && window.scrollY + 300 < all[len].offsetTop) { }
            links.forEach(l => l.classList.remove('active'))
            links[len].classList.add('active')
        }
        activeMenu()
        window.addEventListener('scroll', activeMenu)
    }, [])

    window.addEventListener('scroll', function () {
        const header = document.querySelector('footer');
        header.classList.toggle('FootShow', window.scrollY > 80);
    })
    return (
        <Wrapper >
            <footer>
                <a id='FootLinks' href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}> <FcHome className='Icon FcHome' /> </a>
                <a id='FootLinks' href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <FcAbout className='Icon' /></a>
                <a id='FootLinks' href="#code" onClick={() => setActiveNav('#code')} className={activeNav === '#code' ? 'active' : ''}><FaCode className='Icon' /></a>
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
    gap: 16px;
    background-color:rgb(255 255 255 / 18%);
    border-radius: 34px;
    backdrop-filter: blur(15px);
    bottom: -5rem;
    z-index: 20;
    
    a{
        width: 45px;
        height: 45px;
        transition:  .3s cubic-bezier(0.42, 0, 0.38, 1.53);
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.active{
            width: 45px;
            height: 45px;
            padding: 5px;
            border: 1px solid #ffffff75;
            background-color: #170e7d95;
       
        }
        &:hover{
            transform: translateY(-6px);
        }
 
        .Icon{
          
           font-size: 30px;
           color: #fcfcfc;
        
          &:active{
            filter: blur(2px);
          }
        }
    }   
}
.FootShow{
    bottom: 2rem;
}

@media (max-width:1000px) {
    footer{
        a{
            &:hover{
                transform: translateY(0);
            }
        }
    }    
}
`
