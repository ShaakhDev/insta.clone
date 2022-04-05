import MainHeader from "../components/layout/MainHeader";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {getCurrentUser} from "../store/actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../store/reducers/userReducer";


const CURRENT_USER = []

function Home() {
    const dispatch = useDispatch();
    const {token,user} = useSelector(state => state?.user);

    useEffect(() => {
        if(CURRENT_USER[0]!==undefined&&token){
            userActions.setUser(CURRENT_USER[0])
        }
        else if (token) {
            dispatch(getCurrentUser())
            if (user)
                CURRENT_USER.push(user)
        }
    }, [dispatch, token])
    //
    // useEffect(() => {
    //     if (user) dispatch(getUserPosts(user?.username))
    // }, [user, dispatch])

    return (
        <>
            <MainHeader/>
            <Outlet/>
        </>
    );
}

export default Home;