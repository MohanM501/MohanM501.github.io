// rfce - es7/react/redux extension
import { Heading, HStack, Icon, Text, Box } from "@chakra-ui/react";
import React from "react";
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import Name from "./Name";
import styles from "./Social.module.css";

function Social({isDark}) {
    return (
        <Box style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <br/>
            <Heading textAlign={"center"} color="cyan.400" fontSize={{lg:"4xl",md:"3xl",sm:"2xl",base:"xl"}} > Contact</Heading>
            <br/>
            <Box textAlign={"center"} >
                <Text fontSize={{lg:"xl",md:"xl",sm:"md",base:"md"}} color={"white"}>Phone Number: +91 9008510595</Text>
                <br/>
                <Text fontSize={{lg:"xl",md:"xl",sm:"md",base:"md"}}  color={"white"} >E-mail Id: mohananna501@gmail.com </Text>
                <br/>
                <Box className={styles.footer} style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                    <Icon _hover={{color:"cyan.400"}} color={isDark?"white":"teal.200"} onClick={()=>window.open("https://github.com/MohanM501")}as={FaGithub} boxSize="50" />
                    <Icon _hover={{color:"cyan.400"}} color={isDark?"white":"teal.200"} ml={"4"} onClick={()=>window.open("https://www.linkedin.com/in/mohan-m-connect/")} as={FaLinkedin} boxSize="50" />
                </Box>
                <br/>
            </Box>
            
        </Box>

    )
}

export { Social }