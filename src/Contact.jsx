import React, { useState } from 'react';

const Contact=() => {
  const [data,setdata] = useState({
    fullname:"",
    phone:"",
    email:"",
    message:""
  });
  const InputEvent =(event) =>{
      const {name,value}= event.target;
  setdata((prevval) =>{
    return{
      ...prevval,
      [name]:value,
    };
  });
};

  const formSubmit= (e) =>{
    e.preventDefault();
    alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email},Here is what I say ${data.message} `);
  };
  return (
    <>
     <div className="my-5">
        <h1 className="text-center">Contact US </h1>
     </div>
      <div className="container contact_div">
        <div className="row">
             <div className="col-md-6 col-md-10 mx-auto">
               <form onSubmit={formSubmit}>
               <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">FullName</label>
                  <input 
                       type="text" 
                       class="form-control" 
                       id="exampleFormControlInput1" 
                       name="fullname"
                       value={data.fullname}
                       onChange={InputEvent}
                       placeholder="Enter your name"/>
               </div>
               <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Phone</label>
                  <input 
                       type="number" 
                       class="form-control" 
                       id="exampleFormControlInput1" 
                       name="phone"
                       value={data.phone}
                       onChange={InputEvent}
                       placeholder="Mobile Number"/>
               </div>
               <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input 
                       type="email" 
                       class="form-control" 
                       id="exampleFormControlInput1" 
                       name="email"
                       value={data.email}
                       onChange={InputEvent}
                       placeholder="name@example.com"/>
               </div>
               <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea class="form-control" 
                         name="message"
                         value={data.message}
                         onChange={InputEvent}
                         id="exampleFormControlTextarea1" 
                         rows="3">
                  </textarea>
              </div>
              <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
              <br/>
              </form>
             </div>

        </div>
      </div>

    </>

  );
 }
export default Contact;
