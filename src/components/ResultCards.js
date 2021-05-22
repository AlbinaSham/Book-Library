import React, { useState } from "react";
import ShowCard from "./ShowCard";




 const ResultCard = ({ result }) =>{

   const [showCard, setShowCard] = useState(false);

   const openShowCard = () =>{

     setShowCard (prev => !prev);

   };
     return(
        <div 
           className = "mines" 
           style = {{width:"360px", 
           height:"180px",
           border:"solid",
           borderWidth:"0.5px",
           borderColor:"#e1e5ea",
           borderRadius:"2em"}}>

        <div className="mine" onClick = {openShowCard} >

          <div className="ui tiny image" >

              <ShowCard
                 key = {result.title}
                 result = {result}
                 showCard = { showCard } 
                 closeCard = {()=> setShowCard(false)}
                 setShowCard = { setShowCard } 
              />
           <img 
             style = {{margin:"20%",
             width:"150px",
             height:"120px"} }
             src={result.volumeInfo.imageLinks.thumbnail} 
             alt = {result.title} 
          />
          </div>
          <div style = {{margin:"8%"}} 
             className="middle aligned content">
          <a style = {{color:"#87a7b3", 
               fontSize:"20px", 
              textAlign:"center"}}
              className="header">
              {result.volumeInfo.title}   
         </a>
            <h5 style = {{
               color:"#536162"}}>
               {result.volumeInfo.authors}
            </h5>
          </div> 
       </div>
    </div>
        
        
     );
 };
 export default ResultCard;
 