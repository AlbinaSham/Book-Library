import React from "react";
import ReactDOM from "react-dom";
import './ShowCard.css';




    


const ShowCard = ({ showCard,  closeCard, result}) =>{


    if (showCard){
    return ReactDOM.createPortal(
      
        <div> 
            <div className = "containerCard">
      <div className="card">
        <div className="imgnameX">
               <div className="imag">
                   <img src={result.volumeInfo.imageLinks.thumbnail} alt="book pic" />
                    </div>
                 <div className="naneAuthor">
                        <div className="name">
                             <h3>{result.volumeInfo.title}</h3>
                             <h4>{result.volumeInfo.authors}</h4>
                             <h5> Rating:{result.volumeInfo.averageRating} </h5>
                             <button className ="wishbut"> Add to a whishlist</button>
                        </div>
                 </div>
                 <div className="but">
                   <button  onClick={closeCard} className = "closingBut" type="button" name="button">
                   Close</button>
                 </div>
           
         </div>

         <div className="description">
        <p>{result.volumeInfo.description}</p>
      </div> 

     </div>
    </div>
  </div> , document.getElementById('card')  
    )
    } return null;
};
export default ShowCard;