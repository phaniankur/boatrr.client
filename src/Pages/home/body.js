import React from 'react'
import Button from '../../Components/Button'
import Box from '../../Components/library/Box'
import playstore from '../../img/play.png'
import { useNavigate } from "react-router-dom";

const Body = () => {
  let navigate = useNavigate();

  return (
    <Box fontWeight='bold'
    marginBottom='1rem'>
        <Box color='white'
          fontSize={['48px','80px' ]}
          borderBottom= '1px solid white'
          >it isn't just <br/> in the <br/>
          <span style={{color: '#395B64'}}>beauty</span>!
        </Box>
        <Box>
          <Box color='white'
          textAlign='right'
          fontSize={['20px', '30px']}
          marginTop='1rem'
          fontWeight='bold'

          >schedule your <span style={{}}>boat-ride</span><br/> today with boatrr.</Box>
          <Box
            display='flex'
            justifyContent='flex-end'
            alignItems='center'
            gap='1rem'
            color='white'
            fontWeight='normal'

            >
              <img src={playstore} alt='playstore'
              style={{height: '3rem', width: '7rem'}}
              />
            </Box>
          <Box
          display='flex'
          justifyContent='flex-end'
          borderBottom= '1px solid white'
          paddingBottom='1rem'
          fontSize={['20px', '30px']}
          >
          <Button onClick={()=> window.open("https://bybrisk.page.link/?link=https://bybrisk.com?business_id=634868a1215421e2e0c8dedd&apn=com.bybrisk.strike.app")}>Download Bybrisk Strike App</Button>
          </Box>
            {/* <Box
            color='white'
            float='right'
            textAlign='right'
            fontWeight='normal'
            paddingTop= '0.5rem'
            paddingBottom= '0.5rem'
            fontSize='12px'
            borderBottom= '1px solid white'
            >all bookings are made through<br/><span style={{fontWeight: 'bold'}}>Bybrisk Strike App</span>
          </Box> */}
          <Box
          color='white'
          float='right'
          textAlign='left'
          fontWeight='normal'
          paddingTop= '0.5rem'
          paddingBottom= '1rem'
          fontSize={['20px', '30px']}
          borderBottom= '1px solid white'
          >
            <Box fontWeight='bold'>Get Featured!</Box>
            <Box
            fontSize={['14px', '18px']}
            lineHeight='1.5rem'
            paddingBottom='0.5rem'
            >
                We would love to feature you on Instagram.<br/>
                Share your experience with us<br/> with a picture on Instagram.<br/>
                <span style={{fontWeight: 'bold'}}>#boatrr #Banaras</span>
            </Box>
            <Box
            display='flex'
            justifyContent='flex-start'>
                <Button
                onClick={()=> window.open("https://www.instagram.com/boatrr.in/")}
                >Follow on Instagram</Button>
            </Box>
          </Box>
          <Box
            color='white'
            float='right'
            textAlign='right'
            fontWeight='normal'
            paddingTop= '0.5rem'
            paddingBottom= '0.5rem'
            fontSize={['20px', '30px']}
            borderBottom= '1px solid white'>
            <Box fontWeight='bold'>about boatrr.</Box>
            <Box
            fontSize={['14px', '18px']}
            lineHeight='1.5rem'
            paddingBottom='0.5rem'
            >we are a start-up based in <span style={{fontWeight: 'bold'}}>Varanasi</span>. We aim to provide a seamless <span style={{fontWeight: 'bold'}}>boat-ride experience</span> to tourists, travelers visiting the city.</Box>

            <Box
            display='flex'
            justifyContent='flex-end'>
              <Button
              onClick={()=> navigate('/about')}
              >Know More</Button>
            </Box>
          </Box>
          <Box
            color='white'
            float='right'
            textAlign='left'
            fontWeight='normal'
            paddingTop= '0.5rem'
            paddingBottom= '1rem'
            fontSize={['20px', '30px']}
            borderBottom= '1px solid white'>
            <Box fontWeight='bold'>contact us</Box>
            <Box
            fontSize={['14px', '18px']}
            lineHeight='1.5rem'
            paddingBottom='0.5rem'
            >
              Our support is available on <br/><span style={{fontWeight: 'bold'}}>Email</span> and <span style={{fontWeight: 'bold'}}>WhatsApp</span><br/>
              Mail: <span style={{fontWeight: 'bold'}}>care@boatrr.in</span>
            </Box>
            <Box
            display='flex'
            justifyContent='flex-start'>
              <Button
              onClick={()=> window.open("https://wa.me/919566015464", "_blank")}
            >Message on WhatsApp</Button>
            </Box>

          </Box>
        </Box>
    </Box>
  )
}

export default Body