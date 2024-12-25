import React from 'react';
import {Link} from 'react-router-dom';
import classes from './catagory.module.css';
const CatagoryCard=({data})=>{              
    return (
      <section className={classes.catagory}>
        <Link to={`/catagory/${data.name}`}>
          <span>
            <h2>{data?.title}</h2>
          </span>
          <img src={data?.imageLink} alt="catagory card" />
          <p>Shop now</p>
        </Link>
        </section>
    );
}
export default CatagoryCard;