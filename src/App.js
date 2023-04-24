
import { Heading, IconButton, Box, Switch } from '@chakra-ui/react';
import { useEffect, useState, useRef} from 'react';

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Header } from './Components/Header';
import './App.css';
import { Social } from './Components/Social';

import { Project } from './Components/Project';
import Stats from "./Components/Stats";
import GitHubCalendar from 'react-github-calendar';
import TechnicalSkills from './Components/TechnicalSkills';



import DeleteLoader from './Components/DeleteLoader';
import { useDispatch, useSelector } from 'react-redux';
import { changeColorMode } from './Redux/action';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {


  const isDark=useSelector(store=>store.isDark);
  
  const dispatch=useDispatch();

  
  const [icon, setIcon] = useState(false);
  const [isLoading, setLoading] = useState(false);
  

  const toggleColorMode=()=>{
    
    let pass;
    isDark?pass=false:pass=true;
    dispatch(changeColorMode(pass))
  }

  const handleIcon = (() => {
    setIcon(!icon)
  })

  const ref = useRef(null);
  const skil = useRef(null);
  const proj = useRef(null);
  const contac = useRef(null);


  const callResume = () => {

    window.open(`${process.env.REACT_APP_Resume_Url}`)

  }


  // useEffect(() => {
  //   AOS.init({duration:2000})
  //   setLoading(true);
  //   document.title="Portfolio | Mohan M";
  //   let id = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000)
  //   return () => clearTimeout(id);
  // }, [])


  const socia = isDark ? { backgroundColor: "#6B728E", width: "100%" } : { backgroundColor: "teal", width: "100%" };

  const all = {
    headingFontSize:{lg:"4xl",md:"3xl",sm:"2xl",base:"xl"}
  }
  const { headingFontSize } = all;
  
  return (

    <div className={isDark?'App':'AppWhite'} onClick={icon % 2 !== 0 ? handleIcon : null}>
      {/* <div className={isLoading ? "loader" : "normload"} >
         <DeleteLoader /> 
      </div> */}
      {/* <div className={isLoading ? "hideall" : "showall"} > */}

        <div id={"nav-menu"}>
          <div className="topNav">

            <div>
              <button onClick={() => ref.current.scrollIntoView({behavior: "smooth"})}  >Home</button>
            </div>
            
            <div id='hamburgon'>
              <IconButton style={{ cursor: "pointer" }} p={1} as={icon ? CloseIcon : HamburgerIcon} onClick={handleIcon} color={isDark?"white":"darkblue"} variant={"link"}></IconButton>
            </div>

          </div> 

          <div className={icon ? "rightNavTest" : "hide-right-Nav-Test"}>
            <button onClick={() => ref.current.scrollIntoView({behavior: "smooth"})}  >About </button>
            <button onClick={() => skil.current.scrollIntoView({behavior: "smooth"})}  >Skills</button>
            <button onClick={() => proj.current.scrollIntoView({behavior: "smooth"})}   >Projects</button>
            <button onClick={() => contac.current.scrollIntoView({behavior: "smooth"})}   >Contact</button>
            <div>
              <a href={`${process.env.REACT_APP_Resume_Url1}`} download><button onClick={callResume} >Resume</button></a>
            </div>
            <div>
              <Switch size="lg" onChange={toggleColorMode}/>
            </div>
          </div>


        </div>   
      
        <Box ref={ref} id="about" style={{ border: "0px solid red" }}>
           <Header /> 
        </Box> 
        
         <Box ref={skil} style={{ border: "0px solid blue" }} data-aos="fade-up">
          <TechnicalSkills />
        </Box> 
        
         <Box ref={proj} data-aos="fade-right">
             <Project isDark={isDark} />   
        </Box> 
        
        <Box mb={{lg:"80px",md:"40px",sm:"30px",base:"25px"}} data-aos="fade-right" >
          
          <Heading data-aos="fade-right" className="stats-heading" fontSize={headingFontSize} textAlign={"center"} color="cyan.400" fontFamily={'Josefin Sans'} >Github Stats</Heading>

              <Stats />
          
          <Heading className="stats-heading" fontSize={headingFontSize} textAlign={"center"}  color="cyan.400" fontFamily={'Josefin Sans'} >GitHubCalendar</Heading> 
          
            <Box data-aos="fade-right" className={isDark?"github-calender":"white-calender"}  width={{lg:"80%",md:"95%",base:"95%"}} >
           
               <GitHubCalendar username="MohanM501" />
         
          </Box> 
        
        </Box>
        <Box ref={contac} style={socia} data-aos="zoom-in">
           <Social /> 
        </Box> 
    
      {/* </div> */}
    </div>
  );
}

export default App;

