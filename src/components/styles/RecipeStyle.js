import styled from 'styled-components'
import { ReactComponent as SushiIcon } from '../assets/sushi2.svg'

export const Page = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 3% 8%;
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

export const Mid = styled.div`
  margin: 50px 0 0 0;
  display: flex;
`

export const Image = styled.div`
  height: 300px;
  width: 400px;
  background-position: center center;
  background-size: 400px 300px;
  background-repeat: no-repeat;
  border-radius: 34px;
  margin: 0 0 30px 0;
`

export const Ingredients = styled.div`
  margin: 50px 0 0 0;
`

export const MidLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

`

export const MidRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Ingredient = styled.div`
  font-family: 'quicksand';
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0 0 0 10px;
`

export const IngredientsHeader = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 2.5rem;
  font-family: 'inika';
`

export const IngredientWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
`

export const SushiIconn = styled(SushiIcon)`
  height: 30px;
  width: 30px;
`

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin: 0 0 30px 0 ;
`

export const Vege = styled.div`
  font-family: 'quicksand';
  font-weight: 600;
  font-size: 1.3rem;
`

export const CookingTime = styled.div`
  font-family: 'quicksand';
  font-weight: 600;
  font-size: 1.3rem;
`

export const Diffic = styled.div`
  color: black;
  font-family: 'quicksand';
  font-weight: 600;
  font-size: 1.3rem;
`

export const Dot = styled.div`
  height: 8px;
  width: 8px;
  background-color: #EA2027;
  border-radius: 50%;
`
