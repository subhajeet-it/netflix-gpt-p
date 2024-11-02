import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch=useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
      
          
          updateProfile(user, {
            displayName: "Subhajeet Das", photoURL: "https://prabhushriram.com/wp-content/uploads/2023/08/Bhakti-Thumbnail-38-min-1185x800.jpg.webp"
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          }).catch((error) => {
            // An error occurred
            // ...
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
          alt="bg-logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 p-12 mx-auto right-0 left-0 mt-36 bg-opacity-80"
      >
        <h1 className="text-[2rem] text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-2 m-2 w-full rounded-md"
            type="text"
            placeholder="Enter Name"
          />
        )}
        <input
          ref={email}
          className="p-2 m-2 w-full rounded-md"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-2 m-2 w-full rounded-md"
          type="text"
          placeholder="Password"
        />
        <p className="py-2 text-lg text-red-500">{errorMessage}</p>
        <button
          onClick={handleBtnClick}
          className="p-2 m-2 w-full bg-red-600 rounded-md"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h4 className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already Register...Sign In"}
        </h4>
      </form>
    </div>
  );
};

export default Login;
