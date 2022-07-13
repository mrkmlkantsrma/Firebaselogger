import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const logout = () => {
    localStorage.setItem("userID", '');
    localStorage.setItem("Email", '');
    localStorage.clear();
}

const SuccessPage = () => {
  let email = '';
    useEffect(() => {
        console.log("User ID = "+localStorage.getItem("userId"));
        console.log("Email = "+localStorage.getItem("Email"));
      }, []);
    return (
        <section>
            <div className="col-12  boxen row">
                <div className="backhome col-8">
                <h6> Welcome to Firebase. You successfully Logged In. </h6>
                <h6> Email :  {localStorage.getItem("Email")} </h6>
                <Link className="nav-link" to={`/`}> <button href="#" onClick={logout} className="button">Back To Home</button></Link>
                </div>
            </div>
        </section>
    )
}

export default SuccessPage;