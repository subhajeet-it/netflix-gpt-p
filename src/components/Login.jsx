import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const[isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
          alt="bg-logo"
        />
      </div>
      <form className="absolute bg-black w-3/12 p-12 mx-auto right-0 left-0 mt-36 bg-opacity-80">
        <h1 className="text-[2rem] text-white">{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input
          className="p-2 m-2 w-full rounded-md"
          type="text"
          placeholder="Enter Name"
        />}
        <input
          className="p-2 m-2 w-full rounded-md"
          type="text"
          placeholder="Email Address"
        />
        <input className="p-2 m-2 w-full rounded-md" type="text" placeholder="Password" />
        <button className="p-2 m-2 w-full bg-red-600 rounded-md">{isSignInForm?"Sign In":"Sign Up"}</button>
       <h4 className="text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign up now":"Already Register...Sign In"}</h4>
      </form>
    </div>
  );
};

export default Login;
