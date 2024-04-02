import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import  { useEffect, useState } from 'react';


export  function useAuthStatus() {
  
const [loggedIn, setLoggedIn]= useState(false);
const [checkingStatus, setCheckingStatus] = useState(true);

//ask if person is authenticated or not
useEffect(() => {
const auth = getAuth();
//we ar going to check if person authenticated with onAuthStateChanged
onAuthStateChanged(auth, (user) =>{
    //we are going to set loggedIn true if person is authenticated
    if(user){
        setLoggedIn(true);
    }
    //after checkin we set it to false which was default true
    setCheckingStatus(false);
});



}, []);
return{ loggedIn, checkingStatus }; //we are going to use these 2 information inside of the private-route
}



