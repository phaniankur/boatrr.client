
import Header from '../../Components/header';
import Box from '../../Components/library/Box';
import bgImg2 from '../../img/vns2.jpeg'
import Body from './body';

const Home = () => {
  const myStyle={
    backgroundImage: `url(${bgImg2})`,
    minHeight:'100vh',
    // marginTop:'-20px',
    margin: '0',
    backgroundPosition: 'right 65% bottom 45%',
    // fontSize:'30px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black'
};

  return (
    <Box style={myStyle}
    padding={['1rem','2rem']}>
      <Header/>
      <Body/>
    </Box>
)
}

export default Home