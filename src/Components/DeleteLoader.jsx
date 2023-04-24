import React from "react";
import {Spinner, Heading } from "@chakra-ui/react";
import LoaderComponent from "./LoaderComponent";
import styles from './DeleteLoader.module.css';

const DeleteLoader = () => {
  
  return (
    <div className={styles.loader} >
      <br />
      <Heading fontFamily={"Josefin Sans"} >Portfolio</Heading>
      <br />
      <br />
      <div>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Heading fontFamily={"Josefin Sans"} >...Loading...</Heading>
        <br />
        <LoaderComponent />
      </div>
    </div>
  );
};

export default DeleteLoader;
