import React from 'react'
import Box from './library/Box'
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <Box
    // color={{ _: 'primeYellow', sm: 1, md: 'red', lg: 1 / 4 }}
    color='primeYellow'
    borderBottom= '1px solid white'
    fontSize={['25px', '40px']}
    fontWeight='bold'
    textAlign='center'
    onClick={()=>  navigate('/')}
    >
        boatrr.
    </Box>
  )
}

export default Header