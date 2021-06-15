import React from 'react';
import Common from './Common';
import about from './image/about.jpg'

const About=()=>{
    return(
        <>
       <Common name="Let me build your website. Attract customers 
       like never before" 
       btname="Contact Me" 
       imgsrc={about}
       visit="/contact" />
        </>
    );
}
export default About;