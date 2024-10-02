import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg,setErrorMsg]=useState(null);
        const email=useRef(null);
        const password=useRef(null);
  const handleBtnClick=()=>{
    const message=checkValidateData(email.current.value,password.current.value);
    // console.log(email.current.value,password.current.value);
    setErrorMsg(message);
    
  }

  const toggleClickForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt="bg"
        />
      </div>
      <form onSubmit={(e)=>{e.preventDefault()}} className="w-3/12 p-12 my-36 mx-auto right-0 left-0 absolute bg-black bg-opacity-70">
        <h1 className="text-white text-[2rem] font-bold">{isSignInForm ? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-600"
        />}
        <input
        ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
       <p className="text-[1rem] text-white">{errorMsg}</p>
        <button onClick={handleBtnClick} className="text-white p-2 my-4 w-full bg-red-600 rounded-lg">
        {isSignInForm ? "Sign In":"Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleClickForm}>
          {isSignInForm? "Already Register Member..Sign In":"New to Netflix? Sign up now."}
        </p>
      </form>
    </>
  );
};

export default Login;
