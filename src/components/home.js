import React from "react";

const Home = props => (
  <div className='main-content'>
    <div className='container'>
      <h2>{props.title}</h2>
      <div className='home-image' />
      <div className='thumbnail-container'>
        <div className='home-thumbnail-1' />
        <div className='home-thumbnail-2' />
        <div className='home-thumbnail-3' />
      </div>
    </div>
  </div>
);

export default Home;
