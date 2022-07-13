import "./styles.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import VisitLogin from "./Components/VisitLogin";
import SuccessPage from "./Components/SuccessPage";
import { Routes, Route } from "react-router-dom";
import VisitRegister from "./Components/VisitRegister";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/successpage" element={<SuccessPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/visitlogin" element={<VisitLogin />}></Route>
        <Route path="/visitregister" element={<VisitRegister />}></Route>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </div>
  );
}
