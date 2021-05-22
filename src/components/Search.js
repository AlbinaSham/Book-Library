
import React, { useState, useEffect}  from "react";
import axios from "axios"; 
import ResultCard from "./ResultCards";
import "./app.css"; 


const Search = () => {
    const [inputText, setInputText] = useState("");
    const [results, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyCr_GZNXUb9AUJKtAQn8-bF5J89RZFHc8E");


    const handleSetResult = (event) =>{
           event.preventDefault();
       axios.get("https://www.googleapis.com/books/v1/volumes?q="+inputText+"&key"+apiKey+"&maxResults=12")    
       .then(data => {
           if (!data.errors) {
               setResult(data.data.items);
           }else{
               <h1>Ops...something wrong</h1>
               setResult([]);
           }
       })
    };




    return(
        <div className = "ui container">
           <div className="ui category search">
               <form className="ui fluid input" style= {{marginTop:"30px"}} >
                   <input 
                    value = {inputText}
                    onChange = {(e) => setInputText(e.target.value)}
                    type="text"
                     placeholder="Search for books by title..." />
                        <button className = "ui button"
                           onClick = {handleSetResult}
                           >Search
                        </button>
                </form>
              
                <div className="grid">
                
                   {results.map(result =>{
                     return(
                        <ResultCard key={result.id} result = {result} />
                       );
                      }
                    )}
               
                   
                </div>  
         
           </div>
        </div>  
    );
}

export default Search;



   

