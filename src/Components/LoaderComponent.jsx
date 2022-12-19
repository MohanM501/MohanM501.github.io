import React from 'react';
import { Skeleton, SkeletonCircle, SkeletonText,Box } from '@chakra-ui/react'

const LoaderComponent = () => {
    return (
        <div >
            <Box padding='6' boxShadow='lg' bg='white'>
                <div style={{display:"flex",justifyContent:"end"}}>
                <SkeletonCircle  mr={{base:"20",sm:"60",md:"80",lg:"100"}} size={{base:"8",sm:"12",md:"15",lg:"20"}} />
                </div>
                <SkeletonText mt='4' noOfLines={6} spacing='6' />
            </Box>
        </div>
    )
}

export default LoaderComponent