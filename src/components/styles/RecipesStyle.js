import styled from 'styled-components'

export const Page = styled.div`
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 3% 8%;
    position: relative;
`

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'inika';
    font-size: 3rem;
    user-select: none;
    margin: 0 0 50px 0;
`

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'inika';
  font-size: 4rem;
  position: relative;

  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 100px;
    height: 3px;
    background-color: #EA2027;
    top: 0;
    transform: translateX(-20px);
    border-radius: 50px;
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 100px;
    height: 3px;
    background-color: #EA2027;
    bottom: -10px;
    transform: translateX(20px);
    border-radius: 50px;
  }

`

export const RecipesWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
`

export const SlideBackground = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-family: 'quicksand';
    cursor: pointer;
    transition: 0.5s;
    user-select: none;

    :hover { 
        background-color: rgba(0,0,0,0.8);

    }
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
