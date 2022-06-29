import React, { useContext } from 'react'
import StepperComponent from './StepperComponent'
import { Page, NameWrapper, Mid, MidLeft, MidRight, InfoWrapper, Vege, Dot, CookingTime, Diffic, Image, IngredientWrapper, IngredientsHeader, Ingredient, Ingredients, SushiIconn } from './styles/RecipeStyle'
import { Context } from '../App'

const Recipe = ({ refer }) => {
  
  const ctx = useContext(Context)
  
  if(ctx.recipeData.ingredients === undefined) {
    return <div ref={refer} ></div>
  } else {
    return (
      <Page ref={refer} >
        <NameWrapper>{ctx.recipeData.name}</NameWrapper>
        <Mid>
          <MidLeft>
            <StepperComponent steps={ctx.recipeData.descriptions} />
          </MidLeft>
          <MidRight>
              <InfoWrapper>
                <Vege>{ctx.recipeData.vegan ? 'Vegetarian' : 'No Vegetarian'}</Vege>
                <Dot />
                <CookingTime>{ctx.recipeData.cookingtime} mins</CookingTime>
                <Dot />
                <Diffic>{ctx.recipeData.difficulty}</Diffic>
              </InfoWrapper>
            <Image style={{backgroundImage: `url(${ctx.recipeData.image})`}} />
            <IngredientsHeader>Ingredients</IngredientsHeader>
            <Ingredients>
              {ctx.recipeData.ingredients.map((ingredient) => 
              <IngredientWrapper>
                <SushiIconn />
                <Ingredient key={ingredient}>{ingredient}</Ingredient>
              </IngredientWrapper> )}
            </Ingredients>
          </MidRight>
        </Mid>
      </Page>
    )
  }
}

export default Recipe

