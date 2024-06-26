import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import { getAuth, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {

  
  const [email, setEmail] = useState("");

  function onChange(e) {
   
   setEmail(e.target.value);
  }

  async function onSubmit(e){
    e.preventDefault()
    
    try{
      const auth= getAuth()
      await sendPasswordResetEmail(auth,email);
      toast.success("Email was sent if it exists ");

    }
    catch(error){
    toast.error("Could not send reset password");
    


    }


  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgat Password</h1>
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
           
            {/* whitespace-nowrap prevent them to go to the second line */}
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg ">
              <p className="mb-6">
                Have a account <Link to="/sign-in" className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1">Register</Link>
              </p>
              <p>
                
                <Link to="/sign-in" className="text-blue-600 hover:text-blue-900 transition duration-200 ease-in-out ml-1">Sign in instead</Link>
              </p>
            </div>
            <button className="w-full bg-blue-600 text-white px-7 py-3  text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type="submit">Send reset password</button>
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
