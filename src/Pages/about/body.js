import React from 'react'
import Button from '../../Components/Button'
import Box from '../../Components/library/Box'

const Body = () => {

  return (
    <Box fontWeight='bold'
    marginBottom='1rem'>
        <Box
        color='white'
        float='right'
        paddingTop= '0.5rem'
        paddingBottom= '0.5rem'
        fontSize={['20px', '30px']}
        borderBottom= '1px solid white'>
            <Box fontWeight='bold'
            textAlign='left'
            >about boatrr.</Box>
            <Box

            fontSize={['14px', '18px']}
            lineHeight='1.5rem'
            paddingBottom='0.5rem'
            >
            {/* we are a start-up based in <span style={{fontWeight: 'bold'}}>Varanasi</span>. We aim to provide a seamless <span style={{fontWeight: 'bold'}}>boat-ride experience</span> to tourists, travelers visiting the city. */}
                <Box
                textAlign='left'
                fontWeight='bold'
                marginTop='1rem'
                >
                    How does the boat booking system <br/>work in Varanasi?
                </Box>
                <Box
                textAlign='left'
                fontWeight='normal'
                >There were literally <span style={{fontWeight: 'bold'}}>NO</span> system.<br/>
                Untill we arrived.
                </Box>
                <Box
                textAlign='left'
                fontWeight='normal'
                >
                    Where cars, hotels, and almost everything is getting digitized, then why should boat-ride bookings be left behind?
                </Box>
                <Box
                textAlign='right'
                fontWeight='bold'
                marginTop='1rem'
                >
                    What is the solution?
                </Box>
                <Box
                textAlign='right'
                fontWeight='normal'
                >
                    A simple and seamless booking experience.<br/>
                    Scheduling a boat-ride with boatrr. is simple and hasslefree. When we get a booking request, we make sure that every customer is getting the feature rich experience that we have arranged.
                </Box>
                <Box
                textAlign='left'
                fontWeight='bold'
                marginTop='1rem'
                >
                    There is More...
                </Box>
                <Box
                textAlign='left'
                fontWeight='normal'
                >
                    We are offering FREE tickets to places and museums across Varanasi which you can request once you are booked with us.<br/>
                    You shall request the tickets within 24 hours of scheduling a ride with us. <br/>
                    Choose between:
                    <br/><span style={{fontWeight: 'bold'}}>Ramnagar Fort / BHU Art Gallary / Man Mandir Observatory</span>
                </Box>
            </Box>
        </Box>
        <Box
        color='white'
        float='right'
        textAlign='right'
        fontWeight='normal'
        paddingTop= '0.5rem'
        paddingBottom= '1rem'
        fontSize={['20px', '30px']}
        borderBottom= '1px solid white'
        >
            <Box fontWeight='bold'>Follow us on Social Media</Box>
            <Box
            fontSize={['14px', '18px']}
            lineHeight='1.5rem'
            paddingBottom='0.5rem'
            >
                We would love to feature you.<br/>
                Share your experience with us<br/> with a picture on Instagram.<br/>
                <span style={{fontWeight: 'bold'}}>#boatrr #Banaras</span>
            </Box>
            <Box
            display='flex'
            justifyContent='flex-end'>
                <Button
                onClick={()=> window.open("https://www.instagram.com/boatrr.in/")}
                >Visit Instagram</Button>
            </Box>
        </Box>
        {/* <Box
        color='white'
        float='right'
        textAlign='left'
        fontWeight='normal'
        paddingTop= '0.5rem'
        paddingBottom= '1rem'
        fontSize={['20px', '30px']}
        borderBottom= '1px solid white'
        >
            <Box fontWeight='bold'>contact us</Box>
            <Box
            fontSize={['14px', '18px']}
            lineHeight='1.5rem'
            paddingBottom='0.5rem'
            >
                We are available to serve you<br/> with your queries on<br/>
                Mail: <span style={{fontWeight: 'bold'}}>support@boatrr.in</span>
            </Box>
            <Box
            display='flex'
            justifyContent='flex-start'>
                <Button
                onClick={()=> window.open("https://wa.me/919566015464", "_blank")}
                >Message on WhatsApp</Button>
            </Box>
        </Box> */}
    </Box>
  )
}

export default Body