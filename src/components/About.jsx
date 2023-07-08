import React, { useEffect } from 'react';
import styled from 'styled-components';
import telegram from './images/telegram.png'
const About = () => {

    window.addEventListener('scroll', function () {
        const value = window.scrollY
        const telegram = document.querySelector('.telegram')
        // telegram.style.left = 'calc(-400px + ' + value * 0.9 + 'px)';
        // telegram.style.bottom = 'calc(-760px + ' + value * 0.9 + 'px)';
        // telegram.style.fontSize = 'calc(800px - ' + value * 0.5 + 'px)';
        telegram.style.bottom = 'calc(-400px + ' + value * 1.5 + 'px)';
    })

    useEffect(() => {
        const mirror = document.querySelector('.MirrorContainer')
        const aboutStyle = document.querySelector(".aboutStyle");


        aboutStyle.addEventListener('mousemove', (e) => {
            let xAxis = (window.innerWidth - e.pageX) / 130;
            let yAxis = (window.innerHeight - e.pageY) / 130;
            // console.log('k',xAxis,yAxis);
            mirror.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        aboutStyle.addEventListener("mouseenter", (e) => {
            mirror.style.transition = "none";
        });
        aboutStyle.addEventListener("mouseleave", (e) => {
            mirror.style.transition = "all 0.5s ease";
            mirror.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    })



    return (
        <Wrapper id='about'>

            <h2 data-aos="fade-top">About</h2>

            <div className='aboutSite'>
                <div className='textLeft' >
                    <p data-aos="fade-right">This is a simple site that uses codes from various places, but I used my own idea and changed to</p>
                    <p data-aos="fade-right" data-aos-delay="50" >Various animations and javaScript are used here</p>
                    <p data-aos="fade-right">This is text left Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, inventore! </p>
                </div>
                <div className='textRight'>
                    <p data-aos="fade-left">Testing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque distinctio qui </p>
                    <p data-aos="fade-left" data-aos-delay="50">Here I used aos and react-reveal for animation</p>
                    <p data-aos="fade-left">This is text right Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, excepturi?</p>
                </div>
                <img className='telegram' src={telegram} alt="TelegramIcon" />
            </div>


            <div className='aboutStyle' >
                <div className="rounds round1" data-aos='zoom-in-right' data-aos-delay="10">IT</div>
                <div className="rounds round2" data-aos='zoom-in-up' data-aos-delay="400">IS</div>
                <div className="rounds round3" data-aos='zoom-in-up' data-aos-delay="100">Style</div>
                <div className="rounds roundCenter" data-aos='zoom-in-up' data-aos-delay="800"></div>
                <div className='MirrorContainer' data-aos="zoom-in" data-aos-delay="600"  >
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing  architecto vero quia provident beatae perspiciatis dolorum est labore, consequuntur numquam. Ut, voluptates laudantium autem tempora!</p>
                </div>
            </div>

        </Wrapper>
    );
}

export default About;
const Wrapper = styled.section`
width: 100%;
z-index: 2;
background: #131121;
color: white;
overflow: hidden;
position: relative;
padding: 100px 100px 150px 100px;

    h2{
        text-align: center;
        font-size: 50px;
        font-family: 'Kanit', sans-serif;
    }
    .aboutSite{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: start;
        justify-content: space-between;
        padding: 195px 0 0 0;
        z-index: 1;
            div{
                width: 40%;
                font-family: sans-serif;
                font-size: 36px;
                letter-spacing: 2px;z
                p:nth-child(2){margin-top: 40px;}
                p:nth-child(3){margin-top: 150px;}
            }
            .textLeft{text-align: end;}

            .telegram{
                position: absolute;
                color: white;
                left: 48%;
                height: 300px;
                transform: rotate(316deg) translateX(-50%);
                z-index: -1;
            }
    }

    .aboutStyle{
        width: 100%;
        height: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-top: 300px;
            
            .MirrorContainer{
                width: 700px;
                height: 650px;
                transform-style: preserve-3d;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                z-index: 1;
                
                background-color: rgba(255,255,255,0.1);
                border: 1px solid rgba(255,255,255,0.4);
                box-shadow: 0px 6px 20px rgb(255 255 255 / 39%);
                border-right: 1px solid rgba(255,255,255,0.2);
                border-bottom:1px solid rgba(255,255,255,0.2);
                backdrop-filter: blur(25px);
                border-radius: 10px;

                p{
                    width: 50%;
                    text-align: center;
                    font-family: 'Kanit', sans-serif;

                }
            }
    
            .rounds{
                width: 320px;
                height: 320px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 40px;
                font-family: 'Kanit', sans-serif;
                position: absolute;
                border-radius: 50%;
                letter-spacing: 3px;
                    &::before{filter: blur(30px);}
                    &::before,::after{
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        z-index: -1;
                    }
            }

            .round1{
                top: 100px;
                left: 5%;
                color: yellow;
                &::before,::after{background: #00e4ff; animation: round2Animate 8s linear infinite;}
            }
            .round2{
                top: 200px;
                right: 100px;
                color: #00ff19;
                &::before,::after{background:#1900a6;animation: round2Animate 9s linear infinite;}
            }
            .round3{
                left: 30%;
                bottom: -100px;
                color: #ff00ca;
                &::before,::after{background: #00ff19; animation: round2Animate 7s linear infinite;}
            }
            .roundCenter{
                width: 350px;
                height: 350px;
                top: 250px;
                left: 39%;
                color: yellow;
                &::before,::after{background: #ff9100; animation: round2Animate 8s linear infinite;}
            }
         
    }  

    @keyframes round2Animate {
        0%,100%{border-radius:50% 50% 50% 50% / 50% 50% 50% 50% ;}
        10%{border-radius:61% 39% 50% 50% / 50% 50% 50% 50% ;}
        20%{border-radius:51% 49% 50% 50% / 50% 63% 38% 50% ;}
        30%{border-radius:51% 49% 63% 39% / 50% 50% 50% 50% ;}
        40%{border-radius:51% 49% 50% 50% / 38% 50% 50% 62% ;}
        50%{border-radius:62% 38% 50% 50% / 50% 50% 50% 50% ;}
        60%{border-radius:50% 50% 50% 50% / 50% 63% 38% 50% ;}
        70%{border-radius:50% 50% 63% 39% / 50% 50% 50% 50% ;}
        80%{border-radius:50% 50% 50% 50% / 40% 50% 50% 60% ;}
    }

@media (max-width:1490px) {
    h2{
        font-size: 42px;
    }
    .aboutSite{
        div{
            font-size: 31px;
        }
        .telegram{
            height: 230px;
            left: 48%;
        }
    }
    .aboutStyle{
        margin-top: 190px;
        .MirrorContainer{
            width: 680px;
            height: 610px;
            font-size: 25px;
        }
        .rounds{
            width: 300px;
            height: 300px;
            font-size: 36px;
        }
        .round2{right: 65px;}
        .round3{bottom: -50px;}
        .roundCenter{
            width: 310px;
            height: 310px;
            top: 320px;
            left: 36%;
        }

    }
        
}

@media (max-width:768px) {
    padding: 100px 70px 150px 70px;
   .aboutSite{
    div{
        letter-spacing: 1;
    }
    .telegram{
        height: 125px;
        left: 45%;
    }
    p{
        font-size: 19px;
        line-height: 24px;
        font-size: 19px;
         backdrop-filter: blur(8px);
         padding: 10px;
         border-radius: 31px;
    }
  
   }
   .aboutStyle{
    .MirrorContainer{
        width: auto;
        font-size: 16px;
    }
    .round1{
        width: 260px;
        height: 260px;
        top: 45px;
        left: 95px;
    }
   .round2{
        width: 270px;
        height: 270px;
        right: 168px;
        top: 355px;
    }
    .roundCenter{
        width: 220px;
        height: 220px;
        top: 427px;
        left: 9%;
    }
    .round3{
        width: 260px;
        height: 260px;
        bottom: 30px;
    }
}
}
`
