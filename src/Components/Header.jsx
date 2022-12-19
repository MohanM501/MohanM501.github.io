import {
  Circle,
  Flex,
  Stack,
  useColorMode,
  useMediaQuery,
  Box, Text,
  Button,
  Image
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./header.css";


const Header = () => {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
   const [name,setName]=useState("");
 const [count,setCount]=useState(0);
// const image=require('./medium.jpg');
// const pdf=require('./Mohan M Resume.pdf')


  //console.log(mql,"mql")
  // console.log(isNotSmallerScreen,"isNotSmallerScreen")

  //    sm: '30em',
  //    md: '48em',
  //    lg: '62em',
  //    xl: '80em',
  // 2. Update the breakpoints as key-value pairs
  const callResume = () => {

    window.open("https://drive.google.com/file/d/17KZ4gBMOxq7j3ybHPTq8dXLXO2pHH4yd/view?usp=share_link")

  }
 // const name = "Full Stack Web Developer";

  //Aspiring { name+"|"} 
  let obj = {
    textalign: { lg: "left", md: "center", sm: "center", base: "center" },
    textspaceAlign:{ base: "center", sm: "center",md:"center",lg:"left" }
  }
  const { textalign,textspaceAlign } = obj;
  return (
    <div className="main-head" >
      <Circle id="circle" bg="gray" opacity="0.1" alignSelf="flex-end"></Circle>
      <div className="flex-box" >
        <div className="text-resume" >
          <Text id="hi" fontSize={{ lg: "5xl", md: "3xl", sm: "2xl", base: "2xl" }} textAlign={textalign} fontWeight="semibold" >Hi, I am </Text>
          <Text fontSize={{ lg: "7xl", md: "5xl", sm: "4xl", base: "4xl" }} textAlign={textalign} fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text'> Mohan M </Text>
          <Text fontSize={{ lg: "2xl", md: "xl", sm: "md", base: "sm" }} textAlign={textalign} fontWeight="semibold" color={isDark ? "gray.200" : "gray.500"}><Text fontSize={{ lg: "5xl", md: "3xl", sm: "2xl", base: "xl" }} style={{display:"flex",gap:"10px",border:"0px solid red"}} fontWeight="semibold" id="make_it_center" ><Text>Aspiring </Text><Text id="asp">Full Stack Developer</Text>  </Text> <br /><Text textAlign={textspaceAlign} mb={{ base: "4", sm: "none" }}>Passionate about Coding and Data Strucuture and Algorithm</Text><Text textAlign={textspaceAlign}>I am looking forward to work in real-time projects and learn new skills and technologies</Text> </Text>
          <div className="resume-btn">
            <a href='https://drive.google.com/u/0/uc?id=17KZ4gBMOxq7j3ybHPTq8dXLXO2pHH4yd&export=download' download><Button onClick={callResume} mt={8} backgroundColor={isDark ? "gray.500" : "gray.200"} color="cyan.400" _hover={{ bg: "teal.600", color: "white" }}>Resume</Button></a>
            {/* <a href={pdf} download >resume se</a> */}
          </div>
        </div>
        <Image alignSelf="center" mt={{ lg: "0", md: "0", sm: "12", base: "12" }} mb={{ lg: "0", md: "0", sm: "12", base: "12" }} borderRadius='full' backgroundColor="transparent" boxShadow="lg" boxSize={{ lg: "300px", md: "240px", sm: "200px", base: "160px" }} src="https://avatars.githubusercontent.com/u/107466981?v=4" />
      </div>

    </div>
  )
}

export { Header }