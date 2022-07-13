import Card from "./Card";
import Login from "../Pages/Login";
import { Link } from "react-router-dom";

const VisitLogin = () => {
    return (
        <section>
            <div className="col-12  boxen row">
                <div className="visitus col-8">
                    <Card heading={'Login To Firebase'} />
                    <Login />
                </div>
                <div className="visitus col-4">
                <p>If Not Have Account ? </p>
                    <Link className="nav-link" to={`/visitregister`}><button type="button" className="button">Register</button></Link>
                </div>
            </div>
        </section>
    )
}

export default VisitLogin;