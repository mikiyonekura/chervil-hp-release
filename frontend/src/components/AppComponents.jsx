import '../App.css';
import HomePage from './/HomePage';
import Footer from "./parts/Footer";
import Header from "./parts/Header";
import Parking from "./Parking";
import Signin from "./signin/Signin";
import Form from "./trash/Form";
import Login from './signin/Login';
import SignUp from './signin/Singup';
import TodayMenuFirebase from './todaymenu/TodayMenuFirebase';
import Sat from './Sat';
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const AppCompoenents = () => {
    const location = useLocation();

    return (
        <div className="App">
        
        <Header />
        <div className="Routes">
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/TodayMenuFirebase" element={<TodayMenuFirebase />} />
            <Route path="/Parking" element={<Parking />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="Signup" element={<SignUp />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Sat" element={<Sat />} />
            <Route path="/Login" element={<Login />} />
            </Routes>
        </div>

        <Footer />
        </div>
    )
}

export default AppCompoenents
