
import { Grid, GridItem, Heading, VStack, Flex, IconButton, Box, useColorMode, Spacer, Text, useMediaQuery, Button } from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import { HamburgerIcon, ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import { Header } from './Components/Header';
import './App.css';
import { Social } from './Components/Social';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Icon,
  Progress,

} from '@chakra-ui/react'
import { Project } from './Components/Project';
import Stats from "./Components/Stats";
import GitHubCalendar from 'react-github-calendar';
import TechnicalSkills from './Components/TechnicalSkills';
import { Switch, Stack } from '@chakra-ui/react'

import Delete_Loader from './Components/Delete_Loader';



// md- medium ml-margin-left


function App() {

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    toggleColorMode()
  }, [])
  const isDark = colorMode === "dark" ? true : false;
  //{lg:"row",md:"column",sm:"column",base:"column"};
  //CloseIcon-X
  const [icon, setIcon] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [prog, setProg] = useState(0);





  const handleIcon = (() => {
    setIcon(!icon)
  })

  const ref = useRef(null);
  const skil = useRef(null);
  const proj = useRef(null);
  const contac = useRef(null);


  const callResume = () => {

    window.open("https://drive.google.com/file/d/17KZ4gBMOxq7j3ybHPTq8dXLXO2pHH4yd/view?usp=share_link")

  }


  useEffect(() => {
    setLoading(true);
    let id = setTimeout(() => {
      setLoading(false);
    }, 1000)
    return () => clearTimeout(id);
  }, [])


  const socia = isDark ? { backgroundColor: "teal", width: "100%" } : { backgroundColor: "teal", width: "100%" };
  const obj = {
    nav: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: "-10px",
      alignContent: "center",
      position: "sticky",
      zIndex: "25", top: "0px",
      flexWrap: "wrap",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      
    }
    
  }
  //FS=FontSize
  const all = {
    invisible: { lg: "block", md: "block", sm: "none", base: "none" },
    headingFontSize:{lg:"4xl",md:"3xl",sm:"2xl",base:"xl"}
  }
  const { navRightFS, invisible,headingFontSize } = all;
  //width={[450,"full"]}
  const hove = { bg: "teal.600", color: "white" };
  return (

    <div className='App' onClick={icon % 2 != 0 ? handleIcon : null}>
      <div className={isLoading ? "loader" : "normload"} >
        <Delete_Loader />
      </div>
      <div className={isLoading ? "hideall" : "showall"} >

        <div className={isDark?"completeNav":"DarkCompleteNav"}>
          <div className="topNav">
            <div>
              <button onClick={() => ref.current.scrollIntoView()}  >Home</button>
            </div>
            {/* className="rightNav" */}
            <div id='hamburgon'>
              <IconButton style={{ cursor: "pointer" }} p={1} as={icon ? CloseIcon : HamburgerIcon} onClick={handleIcon} color="cyan.400" variant={"link"}></IconButton>
            </div>
          </div>

          <div className={icon ? "rightNavTest" : "hide-right-Nav-Test"}>
            <button onClick={() => ref.current.scrollIntoView()}  >About </button>
            <button onClick={() => skil.current.scrollIntoView()}  >Skills</button>
            <button onClick={() => proj.current.scrollIntoView()}   >Projects</button>
            <button onClick={() => contac.current.scrollIntoView()}   >Contact</button>
            <div>
              <a href='https://drive.google.com/u/0/uc?id=17KZ4gBMOxq7j3ybHPTq8dXLXO2pHH4yd&export=download' download><button onClick={callResume} >Resume</button></a>
            </div>
            <div>
              <IconButton id="sun-btn" _hover={isDark ? { color: "white" } : { color: "blue" }} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} color="cyan.400" variant={"link"}></IconButton>
            </div>
          </div>


        </div>

         <Box ref={ref} style={{ border: "0px solid red" }}>
          <Header />
        </Box>

        <Box ref={skil} style={{ border: "0px solid blue" }}>
          <TechnicalSkills />
        </Box>
        <Box ref={proj}>
          <Project isDark={isDark} />
        </Box>
        <Box mb={{lg:"80px",md:"40px",sm:"30px",base:"25px"}}>
          
          <Heading className="stats-heading" fontSize={headingFontSize} textAlign={"center"} color="cyan.400" >Github Stats</Heading>

              <Stats />
          
          <Heading className="stats-heading" fontSize={headingFontSize} textAlign={"center"}  color="cyan.400" >GitHubCalendar</Heading>
          
          <Box  style={{ display: "flex", justifyContent: "center",border:"0px solid yellow", margin:"auto",padding:"10px"}} width={{lg:"80%",md:"90%",base:"100%"}}  >
           
               <GitHubCalendar username="MohanM501" />
         
          </Box>
        
        </Box>
        <Box ref={contac} style={socia}>
          <Social isDark={isDark} />

        </Box> 
      </div>
    </div>

  );
}

export default App;

