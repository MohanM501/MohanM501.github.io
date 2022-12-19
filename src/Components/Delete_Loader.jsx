import React,{useState} from 'react';
import {Progress,Heading} from "@chakra-ui/react";
import LoaderComponent from './LoaderComponent';
const Delete_Loader = () => {
  const [prog, setProg] = useState(0);

  let idd = setInterval(function () {
    setProg(prog => prog + 1)
  }, 10);
  

  return (
    <div style={{width:"100%",textAlign:"center"}}>
        <br/>
        <br/>
        <Heading>Portfolio</Heading>
        <br />
        <Heading>...Loading...</Heading>
        <br />
        <br />
        <div>
           <Progress hasStripe value={prog} />
          <br/>
          <LoaderComponent /> 
        </div>
    </div>
  )
}

export default Delete_Loader;