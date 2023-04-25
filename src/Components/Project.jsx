import React,{useEffect,useState} from "react";
import {
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import "./project.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { setWindowSize1 } from "../Redux/action";

const obj = {
  imStyle: { display: "flex", justifyContent: "center" },
  boxshad: {
    paddingTop: "28px",
    paddingBottom: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
  width: "85%",
  sameStyle: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  textColor: "gray.500",
  col: "cyan.200",
  fontSi: { lg: "xl", base: "md" },
  shadowImage: { boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" },
  imgMB: "5",
  btnhover: { color: "white", backgroundColor: "teal" },
  btncolr: "cyan.400",
  title_fonts: { base: "xl", md: "xl", sm: "xl", lg: "2xl" },
};
const {
  title_fonts,
} = obj;


const HtmlImg={name:'HTML',img:"https://i.ibb.co/0JQ7WG2/Whats-App-Image-2022-11-18-at-5-54-24-PM.jpg"};
const CssImg={name:'CSS',img:'https://i.ibb.co/Mc9zCRd/Whats-App-Image-2022-11-18-at-5-54-22-PM.jpg'};
const ReactImg={name:'React',img:"https://i.ibb.co/QrnSnnt/Whats-App-Image-2022-11-18-at-5-54-28-PM-1.jpg"};
const JavaScriptImg={name:"JS",img:"https://i.ibb.co/2t2vxLg/Whats-App-Image-2022-11-18-at-5-54-25-PM.jpg"};
const ReduxImg={name:'Redux',img:"https://i.ibb.co/3RkD4CN/Whats-App-Image-2022-11-18-at-5-54-28-PM.jpg"};

let ProjectArray = [
  { name: "One Mg", 
    img: "https://i.ibb.co/smptRg8/1mg.png",
    description:`1mg website provides an online platform to buy a variety of medical items and gives detailed information about them.`,
    TechStack:[HtmlImg,CssImg,ReactImg,ReduxImg],
    demo_link:"https://my-app-mohanm501.vercel.app/",
    github_link:"https://github.com/MohanM501/One-MG-Website"
  },

  { name: "MyNet Diary", 
    img: "https://i.ibb.co/J5RhdL6/my-Net-Diary.png",
    description:`MyNetDiary is a healthcare website. Provides informations about diets, foods and other features.`,
    TechStack:[HtmlImg,CssImg,JavaScriptImg],
    demo_link:"https://jazzy-scone-de755c.netlify.app/",
    github_link:"https://github.com/TheShenron/unusual-bath-4203"
  },

  { name: "Time Tracker", 
    img: "https://i.ibb.co/1LRKz2d/Time-Tracker.png",
    description:`TrackingTime is an intuitive Time Tracking Software.
    Simplify Timesheets. Get accurate clients, project.`,
    TechStack:[HtmlImg,CssImg,ReactImg],
    demo_link:"https://project-unit4.vercel.app/",
    github_link:"https://github.com/MohanM501/skinny-tendency-7143"
  },
   
  {
    name: "Himalayan",
    img: "https://camo.githubusercontent.com/7f3081afb423c0503d9e7da8b681d955f775f70f54a3d3974c4588b48360c351/68747470733a2f2f692e6962622e636f2f37584d486648572f68696d616c79616e2d70726f6a6563742d6c6f672e6a7067",
    description:`Himalyan is shopping website to buy hair and skinny products across the world.`,
    TechStack:[HtmlImg,CssImg,JavaScriptImg],
    demo_link:"https://tubular-puffpuff-4a880b.netlify.app/",
    github_link:"https://github.com/MohanM501/Himalayan-products-website"
  },
];

const Project = () => {
  const isDark=useSelector(store=>store.isDark);
  const dispatch=useDispatch();
  const col=isDark?"white":"#718096";
  const col1=isDark?"white":"black";
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    AOS.init({duration:2000});
    
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
    
  },[]);

  useEffect(()=>{
    
    dispatch(setWindowSize1(windowSize[0]));

  },[dispatch,windowSize])

  if(windowSize[0]<=599){
    JavaScriptImg.name="JS";
  }else{
    JavaScriptImg.name="Java Script";
  }
  
  return (
    <div>
      <Box>
        <Heading
          textAlign={"center"}
          mt={{ base: "0", md: "40px", lg: "60px" }}
          mb={{ base: "0", md: "30px", lg: "40px" }}
          color="cyan.400"
          fontFamily={'Josefin Sans'}
          fontSize={{ lg: "4xl", md: "3xl", sm: "2xl", base: "xl" }}
        >
          Projects
        </Heading>
        <br />
        <div className="project-container">
          {ProjectArray.length > 0 &&
            ProjectArray.map((item, index) => {
              return (
                <div className="project-card" key={index} data-aos="zoom-in">
                  <div className="project-web-img">
                   <img src={item.img}  alt="TimeTracker" />
                  </div>
                  <div className="project-title">
                    <Text fontSize={title_fonts} as="b" color={col1}>
                        {item.name}
                    </Text>
                  </div>
                  
                  <Text color={col} className="project-description">
                   {item.description}
                  </Text>
                  <div className="Tech-stack">
                    <Text className="tech-stack-head"color={col}>Tech Stacks :- </Text>
                     <Box className="tech-stack-conatiner" color={col} >
                      {item.TechStack.length>0 && item.TechStack.map((item,ind)=>{
                        return (
                            <div key={ind} className="project-tech-stack">
                               <img src={item.img} alt={item.name} className="Project-HeroImg"/>
                               <div className="tech-name">{item.name} </div>
                            </div>
                        )
                      })}
                    </Box> 
                  </div> 
                  
                  <div className={isDark?"Demo-github":"light-Demo-github"}>
                    <button
                      onClick={() =>
                        window.open(`${item.demo_link}`)
                      }
                      className="project-deployed-link"
                    >
                      Demo
                    </button>
                    <button
                      
                      onClick={() =>
                        window.open(
                          `${item.github_link}`
                        )
                      }
                      className="project-github-link"
                    >
                      Github
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <br />
        <br />
      </Box>
    </div>
  );
};
export { Project };
