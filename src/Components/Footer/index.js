import React from 'react'
import Box from '../library/Box'

const Footer = () => {
  return (
    <Box
    width= '100%'
    // height= '40px'

    backgroundColor='transparent'
    position= 'absolute'
    bottom= '0px'
    left= '0'
    right='0'>
        <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        color='white'
        height='100%'
        // paddingBottom='10px'
        >
        <span style={{fontWeight: 'bold'}}>boatrr.in &nbsp; </span> | © All copyrights reserved
        </Box>
    </Box>
  )
}

export default Footer