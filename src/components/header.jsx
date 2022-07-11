import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuBurger from "./MenuBurger";


const Header = () => {
    return (
        <Wrapper>
            <h1 className="Logo">Logo</h1>
            <nav>
                <NavLinks to={'/'}>Home</NavLinks>
                <NavLinks to={'/About'}>About</NavLinks>
                <NavLinks to={'/Code'}>Code</NavLinks>
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
    padding: 20px 80px 20px 50px;

    .Logo{
        color: white;
        font-size: 40px;
    }

    nav{
        display: flex;
        gap: 10px;
        align-content: center;
    }
    @media (max-width:768px) {
        nav{
            display: none;
        }
     }


`

const NavLinks = styled(NavLink)`
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
     
`