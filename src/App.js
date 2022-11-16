import { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Box from "./Components/library/Box";
import theme from "./Components/library/theme";
import About from "./Pages/about";
import Home from "./Pages/home";
import ReactGA from "react-ga";

function App() {
 useEffect(() => {
  ReactGA.initialize("UA-249696688-1");
 }, []);

 return (
  <>
   <ThemeProvider theme={theme}>
    <Box position="relative" minHeight="100%">
     <Router>
      <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/about" element={<About />} />
      </Routes>
     </Router>
     <Footer />
    </Box>
   </ThemeProvider>
  </>
 );
}

export default App;
