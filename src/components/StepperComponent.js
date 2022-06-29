import React from 'react'
import { Wrapper, Header, Step, StepIcon, StepContent, Enjoy, EnjoyWrapper } from './styles/StepperStyle'

const StepperComponent = ({steps}) => {

  return (
    <Wrapper>
      <Header>Instructions</Header>
      {steps.map((step, idx) =>
      <Step key={idx}>
        <StepIcon />
        <StepContent>{step}</StepContent>
      </Step>)}
      <EnjoyWrapper><Enjoy /></EnjoyWrapper>
    </Wrapper>
  )
}

export default StepperComponent