import React from 'react';
import classes from './catagory.module.css';
const CatagoryCard=({data})=>{              
    return (
      <section className={classes.catagory}>
        <a href="">
          <span>
            <h2>{data.title}</h2>
          </span>
          <img src={data.imageLink} alt="catagory card" />
          <p>Shop now</p>
        </a>
        </section>
    );
}
export default CatagoryCard;