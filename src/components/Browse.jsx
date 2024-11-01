import React from 'react'
import Header from './Header'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Browse = () => {
  const navigate=useNavigate();
  const userStore=useSelector(store=>store.user);
  const loginHandler=()=>{
    signOut(auth).then(() => {
        navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className='flex justify-between'>
  <div>
  <Header/>
  </div>
      <div className='z-10'>
        <img className='w-12' src={userStore?.photoURL}/>
      <button onClick={loginHandler} className='text-xl text-white bg-yellow-200'>Sign out</button>
    </div>
    </div>
  )
}

export default Browse