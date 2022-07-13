import React, { useState, useEffect } from "react";
import "../Css/Login.css";
import firebase from "../services/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Input from "../ui/Input";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// let db = firebase.firestore();

const Login = (props) => {
  const [error, setError] = useState();
  const [userCred, setUserCred] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    let userID = localStorage.getItem("userId");
    if(userID){
       navigate('/successpage')
     }else{
       navigate('/visitlogin')
     }
 },[])

  const changeHandler = (event) => {
    let val = event.target.value;
    setUserCred((prevState) => {
      return {
        ...prevState,
        [event.target.name]: val
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Authentication");
    if (userCred.email === "") {
      setError("Enter valid email");
    } else if (userCred.password === "") {
      setError("Enter valid passwords");
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(auth,
        userCred.email,
        userCred.password)
        .then((userCredential) => {
          let userId = userCredential.user.uid;
          localStorage.setItem("userId", userId);
          localStorage.setItem("Email", userCred.email);
          navigate('/successpage')
        })
        .catch((e) => {
          console.log(e.code);
          if (e.code === "auth/wrong-password") {
            setError("Incorrect password. Try again.");
          } else if (e.code === "auth/network-request-failed") {
            setError("Internet connection is down!!!");
          } else {
            setError("User doesn't exist. Please do register.");
          }
        });
    }
  };

  return (
    <div className="login">
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={userCred.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
          value={userCred.password}
        />
        <button type="submit" className="button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
