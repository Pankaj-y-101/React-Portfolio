import React from 'react';
import Common from './Common';
import home1 from './image/home1.jpg';

const Home=()=>{
    return(
        <>
       <Common name="The goal isn’t to build a website. The goal is to build 
        your business." 
       btname="Get Started" 
       imgsrc={home1}
       visit="/service" />
        </>
    );
}
export default Home;