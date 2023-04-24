import { Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./TechSkills.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


let HeroImage = {
    font:{base:"sm",sm:"sm",md:"xl",lg:"2xl"},
    textmarginTop:"4",
    textalign:"center",
    fontSize_heading:{lg:"4xl",md:"3xl",sm:"2xl",base:"xl"}
}
let {font,textmarginTop,textalign,fontSize_heading } = HeroImage;

const jss="Java Script"
let FrontHeroImages=[
    {name:"HTML", img:"https://i.ibb.co/0JQ7WG2/Whats-App-Image-2022-11-18-at-5-54-24-PM.jpg"},
    {name:"CSS", img:"https://i.ibb.co/Mc9zCRd/Whats-App-Image-2022-11-18-at-5-54-22-PM.jpg"},
    {name:[jss], img:"https://i.ibb.co/2t2vxLg/Whats-App-Image-2022-11-18-at-5-54-25-PM.jpg"},
    {name:"React", img:"https://i.ibb.co/QrnSnnt/Whats-App-Image-2022-11-18-at-5-54-28-PM-1.jpg"},
    {name:"Redux", img:"https://i.ibb.co/3RkD4CN/Whats-App-Image-2022-11-18-at-5-54-28-PM.jpg"},
    {name:"Chakra",img:"https://i.ibb.co/5stH9Py/Whats-App-Image-2022-11-18-at-5-54-20-PM.jpg"}
]


let BackHeroImages=[
    {name:"MongoDB",img:"https://th.bing.com/th/id/OIP.iT9pde4feVTMGplkxVdxAwHaHa?w=158&h=180&c=7&r=0&o=5&pid=1.7"},
    {name:"MongoDB",img:"https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png"},
    {name:"Express",img:"data:image/png;base64,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"},
    {name:"Node JS",img:"https://i.ibb.co/pJB95Dn/icons8-nodejs-240.png"},
    {name:"GitHub",img:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"},
    {name:"VS Code",img:"https://img.icons8.com/color/512/visual-studio-code-2019.png"}
]


const TechnicalSkills = () => {
    const isDark=useSelector(store=>store.isDark);
    const col=isDark?"white":"black";
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return (
        <div className="main-technical">
            <Heading textAlign={"center"} className="frontend-heading" fontSize={fontSize_heading} color="cyan.400" fontFamily={'Josefin Sans'} >Technical Skills</Heading>
            
            <div>
                <Heading textAlign={"center"} className="frontend-heading" color="cyan.400" fontSize={fontSize_heading} fontFamily={'Josefin Sans'} >Frontend</Heading>
                
                    <div className="TechSkills" data-aos="fade-right">
                        {
                            FrontHeroImages.length>0 && FrontHeroImages.map((item,index)=>{
                                return (
                                         <div key={index} className="front-hero-div">
                                             <img src={item.img}  className="front-img" alt={`hero-front-img`} />
                                             <Text fontSize={font} mt={textmarginTop} textAlign={textalign} color={col} >{item.name}</Text>
                                         </div> 
                                )
                            })
                        }
                             
                    </div>
                
               
             <Heading className="backend-heading" id="back-head" textAlign={"center"} fontSize={fontSize_heading} color="cyan.400" fontFamily={'Josefin Sans'} >Backend {`&`} Tools</Heading>
             <div className="BackEnd-Skills" data-aos="fade-right">
                        {
                            BackHeroImages.length>0 && BackHeroImages.map((item,index)=>{
                                return (
                                         <div key={index} className="front-hero-div">
                                             <img src={item.img}  className="front-img" alt={`hero-front-img`} />
                                             <Text fontSize={font} mt={textmarginTop} textAlign={textalign} color={col}  >{item.name}</Text>
                                         </div> 
                                )
                            })
                        }
                             
                    </div>
            </div>
            <br/>
        </div>
    )
}

export default TechnicalSkills;