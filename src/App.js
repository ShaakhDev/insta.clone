import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {Routes, Route, } from 'react-router-dom'
import Home from "./pages/Home";

function App() {

    return (
        <Routes>

            <Route path='/' element={<Home/>}>

            </Route>
         <Route path="/accounts/*" >
             <Route path="login" element={<Login/>}/>
             <Route path="signup" element={<SignUp/>}/>
         </Route>
        </Routes>

    );
}

export default App;
