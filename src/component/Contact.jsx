import React from 'react';

const Contact=()=>{
    return(
        <>
    
       <h1 className="text-center">Contact Me</h1>
       <form>
           <div className="container form-group row form-control ">
               <label>Full Name</label>
               <input type="text" placeholder="Enter Your Full Name Here" />
               <label>E-mail</label>
               <input type="text" placeholder="Enter Your E-Mail Here" />
               <label>Phone Number</label>
               <input type="number" placeholder="Enter Your Phone Number Here" />
               <button type="submit">Submit</button>
           </div>
       </form>
       
        </>
    );
}
export default Contact;