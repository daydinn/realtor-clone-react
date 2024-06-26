import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { signInWithEmailAndPassword,  } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  //formdata hook coverng email,password
  //we use setFormData to change formData
  //this is going to be equal to useState
  //initial value for email and password will empty string
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //we dont have access to email and password
  //distract formData as email and password so that we can use it in template
  const { email, password } = formData;
  const navigate = useNavigate();

  //Das onChange-Ereignis: Dies ist ein eingebautes Ereignis von React (und auch von Vanilla JavaScript),
  //das ausgelöst wird, sobald sich der Wert eines Input-Elements ändert.
  //Indem du onChange={onChange} in dein Input-Element einfügst,
  //sagst du React, dass es die Funktion onChange aufrufen soll,
  //jedes Mal wenn der Benutzer eine Änderung im Input-Element vornimmt.

  function onChange(e) {
    //we can use prevState to keep the prev Information
    setFormData((prevState) => ({
      ...prevState, //keep the previous state and add the new one
      [e.target.id]: e.target.value, //whatever we type is going to be save inside formdata
    }));
  }

  async function onSubmit(e){
   e.preventDefault()
  

   try{
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    
    if(userCredential.user){
      navigate("/");
      toast.success("Sign in  successful")

    }


   }catch(error){
    toast.error("Bad user credentials")


   }

  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww"
            alt="key"
            className="w-full rounded 3xl"
          ></img>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                <form onSubmit={onSubmit}>
            <input
              
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="w-full px-4 py-2 text-xl mb-6 text-gray-700
            bg-white border-gray-300 rounded transition ease-in-out"
            />
            <div className="relative mb-6">
              <input
                
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="w-full px-4 py-2 text-xl text-gray-700
            bg-white border-gray-300 rounded transition ease-in-out"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer "
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer "
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            {/* whitespace-nowrap prevent them to go to the second line */}
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg ">
              <p className="mb-6">
                Don't have a account <Link to="/sign-up" className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1">Register</Link>
              </p>
              <p>
                <Link to="/forgot-password" className="text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out ml-1">Forgot password?</Link>
              </p>
            </div>
            <button className="w-full bg-blue-600 text-white px-7 py-3  text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type="submit">Sign in</button>
          <div className=" flex my-4 items-center before:border-t  before:flex-1  after:border-gray-300 after:border-t  after:flex-1  ">
            <p className="text-center font-semibold mx-4 ">OR</p>
          </div>
        <OAuth></OAuth>
          </form>
          
        </div>
      </div>
    </section>
  );
}
