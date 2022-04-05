import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {Routes, Route, useNavigate,} from 'react-router-dom'
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom'
import CurrentPost from "./pages/CurrentPost";

function App() {
    const {token} = useSelector(state => state?.user)

    return (
        <Routes>
            <Route path='/' element={<Home/>}>
                {/*<Route path=':user' element={token ? (<Profile/>) : (<Navigate to="/" replace={true}/>)}/>*/}
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
