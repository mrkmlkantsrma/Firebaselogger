import Card from "./Card";
import Signin from "../Pages/Signin";
import { Link } from "react-router-dom";

const VisitRegister = () => {
    return (
        <section>
            <div className="col-12  boxen row">
                <div className="visitus col-8">
                    <Card heading={'Register To Firebase'}/>
                    <Signin />
                </div>
                <div className="visitus col-4">
                <p>If Already Have Account ? </p>
                    <Link className="nav-link" to={`/visitlogin`}><button type="button" className="button">Log In</button></Link>
                </div>
            </div>
        </section>
    )
}

export default VisitRegister;