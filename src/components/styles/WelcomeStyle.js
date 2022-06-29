import styled, { keyframes } from 'styled-components'
import { ReactComponent as ArrowIcon } from '../assets/arrow.svg'

export const Page = styled.div`
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    padding: 3% 8%;
`

export const NavBar = styled.nav`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LogoWrapper = styled.div`
    font-family: 'inika';
    height: 100%;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 3.5rem;
`

export const ClickWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2.5rem;
    font-family: 'quicksand';
    font-weight: 500;
    width: 430px;
`

export const ClickRecipes = styled.div`
    display: flex;
    transition: 0.2s;
    cursor: pointer;

    :hover {
        color: #EA2027;

        & .hovver {
            color: white;
        }

        & .hovver::after {
            width: 67px;
            transition: 0.2s;
        }


    }

    & .hovver::after {
        content: '';
        display: block;
        position: absolute;
        height: 100%;
        width: 0;
        background-color: black;
        transform: translateY(-95%);
        right: 0;
        transition: 0.2s;
        z-index: -1;
    }
`

export const ClickRecipesHover = styled.div`
    position: relative;
    transition: 0.2s;
    z-index: 100;
`

export const ClickMobile = styled.div`

    display: flex;
    position: relative;
    transition: 0.2s;
    cursor: pointer;

    :hover {
        color: #EA2027;

        & .hovvver {
            color: white;
        }

        & .hovvver::after {
            width: 77px;
            transition: 0.2s;
        }


    }

    & .hovvver::after {
        content: '';
        display: block;
        position: absolute;
        height: 100%;
        width: 0;
        background-color: black;
        transform: translateY(-95%);
        right: 0;
        transition: 0.2s;
        z-index: -1;
    }


    ::before {
        content: 'Soon';
        display: block;
        position: absolute;
        font-size: 1.2rem;
        font-weight: 600;
        color: #AEAEAE;
        bottom: 0;
        right: 0;
        transform: translate(-120%,100%);
    }
`

export const ClickMobileHover = styled.div`
    position: relative;
    transition: 0.2s;
    z-index: 100;
    margin: 0 0 0 15px;
`

export const MidPart = styled.div`
    width: 100%;
    height: auto;   
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 100px 0 0 0;
`

export const MidLeft = styled.div`
    
`

export const MidRight = styled.div`
`

export const Cards = styled.div`
    height: auto;
    display: flex;
`

export const CardLeft = styled.div`

`

export const CardMid = styled.div`
    margin: 0 15px 0 15px;
`

export const CardRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardNigiri = styled.div`
    border-radius: 34px;
    height: 320px;
    width: 220px;
    background-image: url(${require('../assets/nigiri.jpg')});
    background-position: center center;
    background-size: 450px 330px;
    background-repeat: no-repeat;
    overflow: hidden;
`

export const CardNigriFade = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0);
    color: transparent;
    transition: 0.6s;
    font-family: 'inika';
    font-size: 2.5rem;


    :hover {
        background-color: rgba(0,0,0, 0.7);
        color: white;
        transition: 0.6s;
    }
    
`

export const CardHosomaki = styled.div`
    border-radius: 34px;
    height: 200px;
    width: 320px;
    background-image: url(${require('../assets/maki.jpg')});
    background-position: center center;
    background-size: 350px 250px;
    background-repeat: no-repeat;
    overflow: hidden;
`

export const CardHosomakiFade = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0);
    color: transparent;
    transition: 0.6s;
    font-family: 'inika';
    font-size: 2.5rem;


    :hover {
        background-color: rgba(0,0,0, 0.7);
        color: white;
        transition: 0.6s;
    }
`

export const CardUramaki = styled.div`
    border-radius: 34px;
    height: 200px;
    width: 320px;
    background-image: url(${require('../assets/uramaki.jpg')});
    background-position: center center;
    background-size: 440px 250px;
    background-repeat: no-repeat;
    overflow: hidden;
    margin: 15px 0 0 0;
`

export const CardUramakiFade = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0);
    color: transparent;
    transition: 0.6s;
    font-family: 'inika';
    font-size: 2.5rem;


    :hover {
        background-color: rgba(0,0,0, 0.7);
        color: white;
        transition: 0.6s;
    }
`

export const CardFutomaki = styled.div`
    border-radius: 34px;
    height: 320px;
    width: 220px;
    background-image: url(${require('../assets/futomaki.jpg')});
    background-position: center center;
    background-size: 220px 330px;
    background-repeat: no-repeat;
    overflow: hidden;
`

export const CardFutomakiFade = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0);
    color: transparent;
    transition: 0.6s;
    font-family: 'inika';
    font-size: 2.5rem;


    :hover {
        background-color: rgba(0,0,0, 0.7);
        color: white;
        transition: 0.6s;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'quicksand';
    width: 500px;
    text-align: left;
`

export const CustomHeader = styled.div`

    color: #EA2027;
    margin: 0 10px 0 0px;

    ::after {
        content: 'an';
        background-color: black;
        color: white;
        font-weight: 500;
    }
`

export const InfoHeader = styled.div`
    text-align: left;
    display: flex;
    font-weight: 600;
    font-size: 3rem;
    flex-direction: column;
`

export const Info = styled.div`
    margin: 30px 0 0 0;
    font-size: 1.5rem;
    font-weight: 500;
`

export const ScrollInfo = styled.div`
    margin: 50px 0 0 0;
    font-size: 3rem;
    font-weight: 500;
`

export const Line = styled.div`
    width: 84%;
    height: 5px;
    background-color: #EA2027;
    border-radius: 40px;
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
`

const anim = keyframes`
    from {
        transform: translateY(-10px);
    }

    to {
        transform: translateY(10px);
    }
`

export const Icon = styled(ArrowIcon)`
    height: 30px;
    width: 30px;
    transform: translateY(-10px);
    animation: ${anim} 1s infinite alternate;
`