import React from "react";
import { ActressList } from "../data/actress";
import { Link } from "react-router-dom";

const Actress = props => {
  let actress = ActressList.map(person => {
    return (
      <div className='actor-container'>
        <a>
          <div
            className='actor-image'
            style={{
              backgroundImage: "url(" + person.img_src + ")"
            }}
          />
        </a>
        <h3>{person.name}</h3>
      </div>
    );
  });

  return (
    <div className='main-content'>
      <div>
        <Link className='back' to='/'>
          Back
        </Link>
      </div>
      <h2>{props.title}</h2>
      <div className='container'>{actress}</div>
    </div>
  );
};

export default Actress;
