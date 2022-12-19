// import React,{useState,useEffect} from 'react'

// const Name = () => {
    
//    const [name,setName]=useState("");
  
//    const [count,setCount]=useState(0);

//   useEffect(()=>{
    
//     let idx=setInterval(()=>{
//      let na="Full Stack Web Developer";
//        if(name.length<na.length){
//          //console.log(name+na[count],"name")
//          setName(name+na[count])
//        }else{
//         setName(na[0]);

//        }
//        if(count<na.length){
//         setCount(count+1);
//        }else{
//          setCount(1)
//        }
    
       
//     },500)
    
//      return ()=>{
//         clearInterval(idx);
//     }
    
//   },[name])
//   return (
//     <div>Name:- 
//         <h3>{name}</h3>
//         </div>
//   )
// }

// export default Name