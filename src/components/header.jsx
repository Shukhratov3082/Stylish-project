import { useState } from "react";
import styled from "styled-components";
import MenuBurger from "./MenuBurger";

const Header = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <Wrapper>
            <h1 className="Logo">Logo</h1>
            <nav className="navContainer">
                <a  href={'#home'} onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>Home</a>
                <a  href={'#about'} onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
                <a  href={'#code'} onClick={() => setActiveNav('#code')} className={activeNav === '#code' ? 'active' : ''}>Code</a>
            </nav>
            <MenuBurger />
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid black;
    background-color: black;
    justify-content: space-between;
    position: sticky;
    z-index: 5;
    top: 0;
    left: 0;
    padding: 20px 80px 20px 50px;

    .Logo{
        color: white;
        font-size: 40px;
    }

    .navContainer{
        display: flex;
        gap: 10px;
        align-content: center;
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
    @media (max-width:768px) {
        .navContainer{
            display: none;
        }
     }


`

