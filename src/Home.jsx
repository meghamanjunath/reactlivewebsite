import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/Images/tree.webp';
import Commonpage from './Commonpage';

const Home=() => {
  return (
    <>
      <Commonpage 
           name="Grow your business with" 
           imgsrc={web} 
           visit="/contact" 
           btname="Get started"
        /> 
    </>
  );
 }
export default Home;
