import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import CurrentPost from "./pages/CurrentPost";

function App() {

    return (
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route path=':user' element={<Profile/>}/>
                <Route index element={<Posts/>}/>
                <Route path="/p/*">
                    <Route path=":postId" element={<CurrentPost/>}/>
                </Route>
            </Route>
            <Route path="/accounts/*">
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<SignUp/>}/>
            </Route>

        </Routes>

    );
}

export default App;
