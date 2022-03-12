import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {Routes, Route,} from 'react-router-dom'
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";


function App() {

    return (
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route path=':user' element={<Profile/>}/>
                <Route index element={<Posts />} />
            </Route>
            <Route path="/accounts/*">
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<SignUp/>}/>
            </Route>
        </Routes>

    );
}

export default App;
