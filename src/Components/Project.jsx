import React from "react";
import { Heading, Box, Image, Text, Grid, GridItem, Button, Spacer } from "@chakra-ui/react";



const obj = {
    imStyle: { display: "flex", justifyContent: "center" },
    boxshad: { paddingTop: "28px", paddingBottom: "20px", marginLeft:"20px", marginRight:"20px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" },
    width: "85%",
    sameStyle: { display: "flex", justifyContent: "center",paddingLeft:"10px",paddingRight:"10px" },
    textColor:"gray.500",
    col:"cyan.200",
    fontSi:{lg:"xl",base:"md"},
    shadowImage:{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"},
    imgMB:"5",
    btnhover:{color:"white",backgroundColor:"teal"},
    btncolr:"cyan.400",
    title_fonts:{ base: 'md', md: "xl", sm: "lg", lg: "2xl" }
}
const { sameStyle, imStyle, boxshad, width,textColor,col,fontSi,shadowImage,imgMB,btnhover,btncolr,title_fonts} = obj;

let ProjectImage={
    Time_Tracker:"https://i.ibb.co/1LRKz2d/Time-Tracker.png",
    Net_Diary:"https://i.ibb.co/J5RhdL6/my-Net-Diary.png",
    OneMg:"https://i.ibb.co/smptRg8/1mg.png",
    himalayan:"https://camo.githubusercontent.com/7f3081afb423c0503d9e7da8b681d955f775f70f54a3d3974c4588b48360c351/68747470733a2f2f692e6962622e636f2f37584d486648572f68696d616c79616e2d70726f6a6563742d6c6f672e6a7067"
}
let {Time_Tracker,Net_Diary,OneMg,himalayan}=ProjectImage;
const c = {lg:"center",md:"justify",base:"justify"};


const Project = ({isDark}) => {
    
    return (
        <div>
        <Box>
            <Heading textAlign={"center"} mt={{base:"0",md:"40px",lg:"60px"}} mb={{base:"0",md:"30px",lg:"40px"}}color="cyan.400" fontSize={{lg:"4xl",md:"3xl",sm:"2xl",base:"xl"}}>Projects</Heading>
            <br />
            <Grid  templateColumns={['repeat(1, 1fr)', 'repeat(2,1fr)']} gap={6}>
                <GridItem style={boxshad}>
                    <Box style={imStyle} mb={imgMB}>
                        <Image src={Time_Tracker} width={width} style={shadowImage} alt="TimeTracker" />
                    </Box>
                    <Text ml={{ base: '35%', md: "30%", sm: "30%", lg: "40%" }}  fontSize={title_fonts} as='b'>Time-Tracker</Text>
                    <Text textAlign={c} fontSize={fontSi} color={textColor} p="6">TrackingTime is an intuitive Time Tracking Software. Simplify Timesheets. Get accurate clients, project. Give it a try!</Text>
                    <Box style={sameStyle} fontSize={fontSi} color={btncolr} pb="4"><Text>Tech Stack :- &nbsp;&nbsp;</Text> <Text> | HTML | CSS | React | </Text> </Box>
                    <Box style={sameStyle} fontSize={fontSi} color={textColor} ><Button _hover={btnhover} color={btncolr} onClick={() => window.open("https://project-unit4.vercel.app/")}>Demo</Button> <Button ml="2" _hover={btnhover} color={btncolr} onClick={() => window.open("https://github.com/MohanM501/skinny-tendency-7143")}>Github</Button></Box>
                </GridItem>
                <GridItem style={boxshad}>
                    <Box style={imStyle} mb={imgMB}>
                        <Image src={Net_Diary} width={width} style={shadowImage} alt="TimeTracker" />
                    </Box>
                    <Text ml={{ base: '35%', md: "30%", sm: "30%", lg: "40%" }} fontSize={title_fonts} as='b'>My Net Diary</Text>
                    <Text textAlign={c} fontSize={fontSi} color={textColor} p="6">MyNetDiary is a healthcare website.
                        Provides informations about diets,foods and other features. Give it a try!</Text>
                    <Box style={sameStyle} fontSize={fontSi} color={btncolr}  pb="4"><Text>Tech Stack :- &nbsp;&nbsp;</Text> <Text > | HTML | CSS | JS | </Text> </Box>
                    <Box style={sameStyle} fontSize={fontSi} color={textColor} ><Button _hover={btnhover} color={btncolr} onClick={() => window.open("https://jazzy-scone-de755c.netlify.app/")}>Demo</Button>   <Button ml="2" _hover={btnhover} color={btncolr} onClick={() => window.open("https://github.com/TheShenron/unusual-bath-4203")}>Github</Button></Box>
                </GridItem>
                <GridItem style={boxshad} >
                    <Box style={imStyle} mb={imgMB}>
                        <Image src={OneMg} width={width} style={shadowImage} alt="TimeTracker" />
                    </Box>
                    <Text ml={{ base: '35%', md: "30%", sm: "30%", lg: "40%" }} fontSize={title_fonts} as='b'>One-mg</Text>
                    <Text textAlign={c} fontSize={fontSi} color={textColor} p="6" >1-MG is an intuitive med-care website.
                        Simplify pharmacy. Get accurate test-reports and medical items . Give it a try!</Text>
                    <Box style={sameStyle} fontSize={fontSi} color={btncolr}  pb="4"><Text> Tech Stack :- &nbsp;&nbsp;</Text> <Text> | HTML | CSS | React | Redux | </Text> </Box>
                    <Box style={sameStyle}  fontSize={fontSi} color={textColor} ><Button _hover={btnhover} color={btncolr} onClick={() => window.open("https://verdant-narwhal-3c00f8.netlify.app/")}>Demo</Button>     <Button ml="2" _hover={btnhover} color={btncolr}  onClick={() => window.open("https://github.com/govind-kumarr/loose-writer-618")}>Github</Button></Box>
                </GridItem>
                <GridItem style={boxshad} >
                    <Box style={imStyle} mb={imgMB}>
                        <Image src={himalayan} width={width} style={shadowImage} alt="TimeTracker" />
                    </Box>
                    <Text ml={{ base: '35%', md: "30%", sm: "30%", lg: "40%" }} fontSize={title_fonts} as='b'>Himalayan</Text>
                    <Text textAlign={c} fontSize={fontSi} color={textColor} p="6" >Himalyan is shopping website to buy hair and skinny products across the world</Text>
                    <Box style={sameStyle} fontSize={fontSi} color={btncolr}  pb="4"><Text>Tech Stack :- &nbsp;&nbsp;</Text> <Text> | HTML | CSS | JS | </Text> </Box>
                    <Box style={sameStyle}  fontSize={fontSi} color={textColor} ><Button _hover={btnhover} color={btncolr} onClick={() => window.open("https://tubular-puffpuff-4a880b.netlify.app/")}>Demo</Button>     <Button ml="2" _hover={btnhover} color={btncolr}  onClick={() => window.open("https://github.com/MohanM501/Himalayan-products-website")}>Github</Button></Box>
                </GridItem>

            </Grid>
            <br />
            <br />
        </Box>
     </div>
    )
}
export { Project }