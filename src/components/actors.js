import React from "react";
import { ActorList } from "../data/actors";
import { Link } from "react-router-dom";

const Actors = props => {
  let actors = ActorList.map(person => {
    return (
      <div className='actor-container'>
        <Link to={`/actors/${person.url}`}>
          <div
            className='actor-image'
            style={{ backgroundImage: "url(" + person.img_src + ")" }}
          />
        </Link>
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
      <div className='container'>{actors}</div>
    </div>
  );
};

export default Actors;
