import React, { useState, useRef } from 'react'
import Welcome from './components/Welcome'
import { GlobalStyle } from './components/styles/GlobalStyle'
import Recipe from './components/Recipe'
import SelectRecipes from './components/SelectRecipes'

export const Context = React.createContext({})

const App = () => {

  const [ recipeData, setRecipeData ] = useState([])

  const scroll = (ref) => {
    if (!ref.current) return;
    window.scrollTo({
      left: 0,
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  }

  const selectRef = useRef()
  const recipeRef = useRef()

  return (
    <Context.Provider value={{setRecipeData, recipeData}} >
        <GlobalStyle />
        <Welcome scroll={scroll} refer={selectRef} />
        <SelectRecipes scrollTo={recipeRef} scroll={scroll} refer={selectRef} />
        <Recipe refer={recipeRef} />
    </Context.Provider>
  )
}

export default App