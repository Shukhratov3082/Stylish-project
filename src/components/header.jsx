import { useEffect, useState } from "react";
import styled from "styled-components";
import MenuBurger from "./MenuBurger";
import './Home'

const Header = () => {
    const [activeNav, setActiveNav] = useState('')

    //headerScroll background
    // window.addEventListener('scroll', function () {
    //     const header = document.querySelector('h1');
    //     header.classList.toggle('headerScroll', window.scrollY > 823);
    // })


    useEffect(() => {
        const links = document.querySelectorAll('#links')
        const all = document.querySelectorAll('section')

        function activeMenu() {
            let len = all.length;
            while (--len && window.scrollY + 100 < all[len].offsetTop) { }
            links.forEach(l => l.classList.remove('active'))
            links[len].classList.add('active')
        }
        activeMenu()
        window.addEventListener('scroll', activeMenu)
    }, [])







    return (
        <Wrapper>
            <div className="borderGradiend">
                <h1 data-aos="fade-top" className="Logo">Shukhratov</h1>
            </div>
            <nav className="navContainer" data-aos="fade-bottom">
                <a id="links" href={'#home'} onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>Home</a>
                <a id="links" href={'#about'} onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
                <a id="links" href={'#code'} onClick={() => setActiveNav('#code')} className={activeNav === '#code' ? 'active' : ''}>Code</a>
            </nav>
            <MenuBurger />

        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    padding: 20px 50px 20px 50px;
    font-family: "Coda Caption", sans-serif;;
    scroll-behavior: smooth;
    .borderGradiend{
        width: 275px;
        height: 85px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #110d46;
        border-radius:50% 50% 51% 49% / 36% 65% 35% 64%  ;
        animation: BorderAnimated 13s cubic-bezier(0.47, 0.36, 0.68, 0.82) infinite;
        @keyframes BorderAnimated {
            0%, 100%{border-radius:31% 69% 29% 71% / 42% 50% 50% 58%;}  
            10%{border-radius: 45% 55% 29% 71% / 33% 50% 50% 67%;}         
            20%{border-radius:50% 50% 42% 58% / 31% 60% 40% 69%;}   
            40%{border-radius:64% 36% 69% 31% / 32% 77% 23% 68%;}                 
            60%{border-radius:54% 46% 39% 61% / 48% 66% 34% 52%;}  
            80%{border-radius:  81% 19% 70% 30% / 51% 41% 59% 49%;}           
        }

        .Logo{
            color: white;
            font-size: 40px;
            text-shadow: -4px 2px #404064;
        }   
    }
    
    
    .navContainer{
        display: flex;
        gap: 10px;
        align-content: center;
        font-weight: 800;
        a{
            transition: .3s ease-in-out;
            text-decoration: none;
            color: white;
            font-size: 26px;
            padding: 6px 1rem;
            height: 100%;
            cursor: pointer;
            border-radius: 20px;
                &.active{
                    color: #01afff;
                    background: linear-gradient(180deg,rgba(255,255,255,0) 80%,rgb(9 106 246 / 40%) 99%);
                    border-bottom: 2px solid #001cee;            
                } 
                &:hover{
                    transform: translateY(-2px);
                }
        }
    }
    @media (max-width:1490px){
        .borderGradiend{
            .Logo{
                font-size: 35px;
            }
        }
    }
    @media (max-width:768px) {
        .navContainer{
            display: none;
        }
        .borderGradiend{
            width: 250px;
            .Logo{
                font-size: 30px;
            }
        }
     }


`

