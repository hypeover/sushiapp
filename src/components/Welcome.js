import React from 'react'
import { ReactComponent as LogoIcon } from './assets/sushilogo.svg'
import { Page, NavBar, LogoWrapper, ClickWrapper, ClickMobile, ClickMobileHover, ClickRecipes, ClickRecipesHover, MidLeft, MidPart, MidRight, CardMid, CardLeft, CardNigiri, CardNigriFade, CardRight, Cards, CardHosomaki, CardHosomakiFade, CardUramaki, CardUramakiFade, CardFutomaki, CardFutomakiFade, InfoWrapper, Info, ScrollInfo, CustomHeader, InfoHeader, Line, Icon } from './styles/WelcomeStyle'

const Welcome = ({ scroll, refer }) => {

  return (
    <Page >
        <NavBar>
            <LogoWrapper>
                Sushi
                <LogoIcon style={{height: '50px', width: '50px'}} />
            </LogoWrapper>
            <ClickWrapper onClick={() => scroll(refer)} >
                <ClickRecipes>Reci<ClickRecipesHover className='hovver'>pes</ClickRecipesHover></ClickRecipes>
                <ClickMobile>Mobile <ClickMobileHover className='hovvver'>App</ClickMobileHover></ClickMobile>
            </ClickWrapper>
        </NavBar>
        <MidPart>
            <MidLeft>
                <Cards>
                    <CardLeft>
                        <CardNigiri>
                            <CardNigriFade>Nigiri</CardNigriFade>
                        </CardNigiri>
                    </CardLeft>
                    <CardMid>
                        <CardHosomaki>
                            <CardHosomakiFade>Hosomaki</CardHosomakiFade>
                        </CardHosomaki>
                        <CardUramaki>
                            <CardUramakiFade>Uramaki</CardUramakiFade>
                        </CardUramaki>
                    </CardMid>
                    <CardRight>
                        <CardFutomaki>
                            <CardFutomakiFade>Futomaki</CardFutomakiFade>
                        </CardFutomaki>
                    </CardRight>
                </Cards>
            </MidLeft>
            <MidRight>
                <InfoWrapper>
                    <InfoHeader>Take your tastebuds on a journey around<div style={{display: 'flex'}}> <CustomHeader>Jap</CustomHeader></div></InfoHeader>
                    <Info>Sushi is the most famous Japanese dish   outside of Japan, and one of the most popular dishes among the Japanese. Explore best recipes, roll and enjoy. </Info>
                    <ScrollInfo>Scroll down for recipes🍣 <Icon /></ScrollInfo>
                </InfoWrapper>
            </MidRight>
        </MidPart>
        <Line />
    </Page>
  )
}

export default Welcome