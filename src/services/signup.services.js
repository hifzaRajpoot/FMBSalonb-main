import { collection } from "firebase/firestore";
import {auth, firestoreConfig} from "../database/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

async function attemptToSignup(email,password){
    try {

      let response =  createUserWithEmailAndPassword (auth,email,password)
      return (response);
        
    } catch (error) {
        let message ="";
        if(error.message.includes("email-already-in-use")){
            message = "Email already registered";
        }
            alert(message);
    }

}

async function attempttoSendData (firstName, lastName,dob,gender){
    try {

        const collectionRef = collection(firestoreConfig, users)
        const data = {
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            gender: gender,
            email: email,
          };
          const response = await addDoc(collectionRef, data);
    return response;
  } catch (error) {
    alert(error.message);
  }
}
    

export {attemptToSignup, attempttoSendData}