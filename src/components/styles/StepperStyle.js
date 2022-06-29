import styled from 'styled-components'
import { ReactComponent as LogoIcon } from '../assets/sushilogo.svg'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

export const Step = styled.div`
  font-family: 'quicksand';
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 1.1rem;
`

export const StepIcon = styled(LogoIcon)`
  height: 28px;
  width: 28px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 10px 0;
  transform: translateX(-12.5px);
  color: white;
  cursor: pointer;
`

export const StepContent = styled.div`
  margin: 0 0 15px 10px;
  position: relative;

  ::before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 2px;
    background-color: rgba(234, 32, 39, 0.4);
    transform: translateX(-10px);
    border-radius: 50px;
  }
`

export const Header = styled.div`
  text-align: center;
  margin: 0 0 40px 0;
  font-weight: 500;
  font-size: 2.5rem;
  font-family: 'inika';
`

export const EnjoyWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 0 0;
`

export const Enjoy = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 15px 0 50px 0;
  font-family: 'quicksand';
  font-weight: 600;
  position: relative;

  ::before {
    content: 'itadakimasu!';
    display: block;
    background-color: black;
    color: white;
    position: absolute;
    box-sizing: border-box;
    padding: 5px;
    z-index: 100;
  }

  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 200px;
    height: 50px;
    background-color: #EA2027;
    left: 20px;
    top: 10px;
  }

`