import React from 'react';
// import { NavLink } from 'react-router-dom';
import web from '../src/Images/About.jpg';
import Commonpage from './Commonpage';

const Home=() => {
  return (
    <>
       <Commonpage 
           name="Welcome to About Page" 
           imgsrc={web} 
           visit="/contact" 
           btname="Contact Now"
        />
    </>
  );
 }
export default Home;

