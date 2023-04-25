// rfce - es7/react/redux extension
import { Heading, Icon, Text, Box } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin,FaPhone } from 'react-icons/fa';
import {CgMail} from "react-icons/cg";
import { useSelector } from "react-redux";


import styles from "./Social.module.css";

function Social() {
    const {isDark}=useSelector(store=>store);
    
    
    
    return (
        <Box style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <br/>
            <Heading textAlign={"center"} color="cyan.400" marginBottom={{lg:"1.5",md:"1",sm:"0.5"}} fontSize={{lg:"4xl",md:"3xl",sm:"2xl",base:"xl"}} fontFamily={'Josefin Sans'} > Contact</Heading>
            <br/>
            
            <Box textAlign={"center"} >
                <Box className={styles.Email_Parent}>
                        <Icon className={styles.phone} _hover={{color:"cyan.400"}} cursor="pointer" color={isDark?"white":"teal.200"} as={FaPhone} boxSize="25" />
                        <Text  id="contact-phone" fontSize={{lg:"xl",md:"xl",sm:"md",base:"md"}} color={"white"}> +91 9008510595</Text>
                </Box>
                
                <br/>
                <Box className={styles.Email_Parent}>
                    <Icon className={styles.email} _hover={{color:"cyan.400"}} cursor="pointer" color={isDark?"white":"teal.200"} onClick={()=>window.open("https://mail.google.com/mail/u/0/#inbox")}as={CgMail} boxSize="35" />
                    <Text id="contact-email" fontSize={{lg:"xl",md:"xl",sm:"md",base:"md"}} color={"white"} > mohananna501@gmail.com </Text>
                </Box>
                <br/>
                <Box className={styles.footer} style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                    <Box className={styles.footer_github} cursor="pointer" id="contact-github"  >
                        <Icon _hover={{color:"cyan.400"}} color={isDark?"white":"teal.200"} onClick={()=>window.open("https://github.com/MohanM501")}as={FaGithub} boxSize={"10"} />
                        <Text _hover={{color:"cyan.400"}} fontSize={{lg:"xl",md:"xl",sm:"md",base:"md"}}  color={"white"} onClick={()=>window.open("https://github.com/MohanM501")}>GitHub</Text>
                    </Box>
                    
                    <Box className={styles.footer_github} cursor="pointer" id="contact-linkedin" >
                        <Icon _hover={{color:"cyan.400"}}  color={isDark?"white":"teal.200"} ml={"4"} onClick={()=>window.open("https://www.linkedin.com/in/mohan-m-connect/")} as={FaLinkedin} boxSize={"10"} />
                        <Text _hover={{color:"cyan.400"}} fontSize={{lg:"xl",md:"xl",sm:"md",base:"md"}} color={"white"} onClick={()=>window.open("https://www.linkedin.com/in/mohan-m-connect/")} >LinkedIn</Text>
                    </Box>
                   
                </Box>
                <br/>
               
            </Box>
            
        </Box>

    )
}

export { Social }