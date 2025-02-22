import React from 'react';
import {CatagoryInfo} from './CatagoryInfo';
import CatagoryCard from './CatagoryCard';
import classes from './catagory.module.css';
const Catagory = () => {      
    return (
        <div className={classes.catagory_container}>
        {CatagoryInfo.map((catagory,id) => (
            
          <CatagoryCard data={catagory}  key={id}/>
        ))}
        
        </div>
    );
} 
export default Catagory;