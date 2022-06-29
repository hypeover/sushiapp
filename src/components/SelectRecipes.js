import React, { useContext } from 'react'
import { SushiCategories, Data } from '../Data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import './styles/Swiper.css'
import { Page, RecipesWrapper, Nav, NameWrapper, SlideBackground, Line } from './styles/RecipesStyle'
import { Context } from '../App'

const SelectRecipes = ({ refer, scroll, scrollTo }) => {
    
  const ctx = useContext(Context)
    
  return (
    <Page ref={refer} >
        <RecipesWrapper>
            <Nav><NameWrapper>Sushi</NameWrapper></Nav>
            <Swiper slidesPerView={3.3}
            spaceBetween={70}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper">
                {SushiCategories.map((name, idx) => (
                <SwiperSlide style={{backgroundImage: `url(${name.image})`}} className='Slide' key={idx}    ><SlideBackground  onClick={() => {
                  ctx.setRecipeData(Data[0].sushi[name.path])
                  setTimeout(() => {
                    scroll(scrollTo)
                  }, 50);
                }} >{name.name}</SlideBackground></SwiperSlide>
            ))}   
            </Swiper>
        </RecipesWrapper>
        Soups etc. soon
        <Line />
    </Page>
  )
}

export default SelectRecipes


