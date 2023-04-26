import { Heading,Text } from '@chakra-ui/react'
import React from 'react';
import {useSelector } from 'react-redux';
import Styles from "./About.module.css";
const content="I'm a Bangalore-based developer skilled in HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, and Express (MERN stack). I've built four major projects, 80+ mini-projects, solved 800+ DSA problems, and spent 1400+ hours in coding. Additionally, I have spent 100+ hours in soft-skill development. I have strong problem-solving skills and am curious about emerging technologies. I'm looking forward to contributing to real-time projects and organizations."

const AboutMe = () => { 
  const isDark=useSelector(store=>store.isDark);
  const col=isDark?"white":"#718096";

  return (
    <section>
        <Heading 
          fontFamily={'Josefin Sans'}
          fontSize={{ lg: "4xl", md: "3xl", sm: "2xl", base: "xl" }}
          color="cyan.400" className={Styles["section-title"]} 
        >
         About
        </Heading>
        <Text  id="user-detail-intro" className={Styles["user-detail-intro1"]}  color={col} >
            {content}
        </Text>
    </section>
  )
}

export default AboutMe