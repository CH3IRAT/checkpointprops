import React from 'react';
import PropTypes from "prop-types";

const FullName =(props) =>{

    
    return ( 
    <div>
        


        <div>
       <span><img  src={props.image} width="250px"></img></span> 
        </div> 
        <h1>{props.esmi} </h1>

        <header> {props.profession}</header>

            <p> {props.mybio}</p> 
    
          
           <span>  <button onClick={()=>alert(props.esmi)}>  Click Me</button> </span>
          
          


        
          </div>
        
        
    )
};
FullName.propTypes = {
    esmi: PropTypes.string,
    profession: PropTypes.string,
    mybio: PropTypes.string,
};

export default FullName;


