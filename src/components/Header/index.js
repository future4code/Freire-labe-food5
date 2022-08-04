import React from 'react'

// styles
import { Container, StyledIcon } from './styles'

const Header = ({goTo}) => {
  return (
    <Container>
        {goTo && <StyledIcon onClick={goTo}/>}
    </Container>
  )
}

export default Header