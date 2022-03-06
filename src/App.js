import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {Routes, Route} from 'react-router-dom'
import {useSelector} from "react-redux";

function App() {
    const token = useSelector(state => state?.user.token)

    return (
        <Routes>
            {
                token ? (
                    <Route path='/' element={<h1>Home</h1>}/>
                ) : (

                    <>
                        <Route path="login" element={<Login/>}/>
                        <Route path="signup" element={<SignUp/>}/>
                    </>
                )}


        </Routes>

    );
}

export default App;
