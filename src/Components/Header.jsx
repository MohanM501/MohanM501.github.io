import { Circle, Text, Button, Image,Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import "./header.css";

const Header = () => {
  const isDark = useSelector((store) => store.isDark);

  // const image=require('./medium.jpg');
  // const pdf=require('./Mohan M Resume.pdf')

  const callResume = () => {
    window.open(
      `${process.env.REACT_APP_Resume_Url}`
    );
  };

  let obj = {
    textalign: { lg: "left", md: "center", sm: "center", base: "center" },
    textspaceAlign: "justify",
    fontSize_hi: { lg: "5xl", md: "3xl", sm: "2xl", base: "2xl" },
    fontSize_name: { lg: "7xl", md: "5xl", sm: "4xl", base: "4xl" },
    fontSize_Asp_Int: { lg: "2xl", md: "xl", sm: "md", base: "sm" },
    col: isDark ? "white" : "#718096",
    gradient: "linear(to-r, cyan.400, blue.500, purple.600)",
    lineHeight: { lg: "10", md: "8", sm: "7", base: "6" },
    downlogo: "https://i.postimg.cc/vHMLFq2t/image.jpg",
    downlink:
    `${process.env.REACT_APP_Resume_Url1}`,
    Intro_content:
      "MERN developer with intuitive problem-solving skills and spent 1200+ hours in coding and DSA. Passionate about projects and debugging. Curious to solve problems and learn emerging technologies. Looking forward to working as a team and as an individual to make a significant contribution to an organization.",
  };
  const {
    textalign,
    textspaceAlign,
    fontSize_hi,
    fontSize_name,
    fontSize_Asp_Int,
    col,
    gradient,
    lineHeight,
    downlogo,
    downlink,
    Intro_content,
  } = obj;
  return (
    <div className="main-head">
      <Circle id="circle" alignSelf="flex-end"></Circle>
      <div className="flex-box">
        <div className="text-resume">
          <Text
            id="hi"
            fontSize={fontSize_hi}
            textAlign={textalign}
            fontWeight="semibold"
            color={col}
          >
            Hi 👋 , I am{" "}
          </Text>
          <Text
            fontSize={fontSize_name}
            textAlign={textalign}
            fontFamily={"heading"}
            fontWeight="bold"
            bgGradient={gradient}
            bgClip="text"
          >
            {" "}
            Mohan M{" "}
          </Text>
           <Box
            fontSize={fontSize_Asp_Int}
            textAlign={textalign}
            fontWeight="semibold"
            color={col}
          >
              <Text
              fontSize={{ lg: "5xl", md: "3xl", sm: "2xl", base: "xl" }}
              as="span"
              style={{ display: "flex", gap: "10px", border: "0px solid red" }}
              fontWeight="semibold"
              id="make_it_center"
            >
              <Text>Aspiring </Text>
              <Text id="asp">Full Stack Developer</Text>{" "}
            </Text>  
             <Text
              textAlign={textspaceAlign}
              lineHeight={lineHeight}
              fontSize={{lg:"0.5xl"}}
              id="introd-para"
            >
              {Intro_content}
            </Text> 
          </Box> 
           <div className="resume-btn">
            <a href={downlink} download>
              <Button
                id={isDark ? "resume-btn" : "resume-btn2"}
                onClick={callResume}
                alignSelf="center"
                backgroundColor={isDark ? "white" : "teal"}
              >
                <Text>Resume</Text>
                <img src={downlogo} alt="download" />
              </Button>
            </a>
             {/* <a href={pdf} download >resume se</a>  */}
          </div> 
        </div>

        <Image
          alignSelf="center"
          zIndex={"4"}
          mt={{ lg: "0", md: "0", sm: "12", base: "12" }}
          mb={{ lg: "0", md: "0", sm: "12", base: "12" }}
          ml={{ lg: "2" }}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize={{ lg: "300px", md: "240px", sm: "200px", base: "160px" }}
          src="https://avatars.githubusercontent.com/u/107466981?v=4"
        />
      </div>
    </div>
  );
};

export { Header };
