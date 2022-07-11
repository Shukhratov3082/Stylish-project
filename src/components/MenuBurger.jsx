import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MenuBurger = () => {

    const [burger_class, setBurgerClass] = useState('burger-bar ')
    const [menu_class, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const upDateMenu = () => {
        if (isMenuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        }
        else {
            setBurgerClass('burger-bar ')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }
    return (
        <Wrapper >
            <div className='burger-menu' onClick={upDateMenu}>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>
                <div className={burger_class} ></div>

            </div>
            <div className={menu_class}>
                <nav>
                    <NavLinks className={'NavLinks'} to={'/'}>Home</NavLinks>
                    <NavLinks className={'NavLinks'} to={'/About'}>About</NavLinks>
                    <NavLinks className={'NavLinks'} to={'/Code'}>Code</NavLinks>
                </nav>
            </div>
        </Wrapper>
    );
}

export default MenuBurger;
const Wrapper = styled.div`
        display: none;
        transition:  .5s ease-out;
    .burger-bar{
        width: 35px;
        height: 6px;
        margin-bottom: 5px;
        background-color: rgb(0,133,255);
        border-radius: 20px;
        transition: cubic-bezier(0.175,0.885,0.32,1.1275) 0.5s;
    }
    .menu{
        width: 400px;
        height: 100vh;
        padding: 40px 40px;
        position: absolute;
        top: 0;
        left: 0;
        transition: .5s cubic-bezier(0.12, 0.31, 0.61, 1);
        border: 1px solid black;
        background-color: #032141;
    }
    .hidden{
        transform: translateX(-400px);
    }
    .visible{
        transform: translateX(0);
    }
    .burger-bar.clicked:nth-child(1){
    transform: rotate(45deg) translate(10px,12px);
    }
    .burger-bar.clicked:nth-child(2){
    transform: scale(0.1);
    }
    .burger-bar.clicked:nth-child(3){
        transform: rotate(134deg) translate(-4px,5px);
    }

    @media (max-width:768px) {        
        display: block;
     }

     nav{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    
     }
       
    

`
const NavLinks = styled(NavLink)`
            width: 100px;
            height: 45px;
           
            transition: .3s ease-in-out;
            text-decoration: none;
            text-align: center;
            
            color: white;
            font-size: 26px;
            cursor: pointer;
            border-radius: 20px;
            
            &.active{
                color: #00ffd9;
                background: linear-gradient(180deg,rgba(255,255,255,0) 80%,rgb(9 106 246 / 40%) 99%);
                border-bottom: 2px solid #00ebee;         
            } 
            &:hover{
                transform: translateY(-2px);
            }
                
            
`

