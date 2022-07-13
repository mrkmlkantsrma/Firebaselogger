import React, { useState } from "react";
import "../Css/Login.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from "../ui/Input";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signin = () => {

  const navigate = useNavigate();
  const [error, setError] = useState();
  const [userDetails, setUserDetails] = useState({
    id: "",
    email: "",
    password: ""
  });

  const changeHandler = (event) => {
    let val = event.target.value;
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [event.target.name]: val
      };
    });
  };

  const signUpAuth = (event) => {
    event.preventDefault();
    if (userDetails.password === "") {
      setError("Enter valid passwords");
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth,
        userDetails.email.trim(),
        userDetails.password.trim()
      )
        .then((userCred) => {
          const docId = userCred.user.uid;
          localStorage.setItem("userId", docId);
          localStorage.setItem("Email", userDetails.email.trim());
          navigate('/successpage')
        })
        .catch((e) => console.log(e, "create_authentication"));
      setUserDetails({
        email: "",
        password: ""
      });
    }
  };

  return (
    <div className="login">
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={signUpAuth}>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={userDetails.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
          value={userDetails.password}
        />
        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signin;
