import MainHeader from "../components/layout/MainHeader";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {getCurrentUser} from "../store/actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../store/reducers/userReducer";



function Home() {
    const dispatch = useDispatch();
    const {user,token} = useSelector(state => state?.user);

    useEffect(() => {
        if(user){
            userActions.setUser(user);
        }else if(token){
            dispatch(getCurrentUser())
        }
    }, [dispatch, user,token])


    return (
        <>
            <MainHeader/>
            <Outlet/>
        </>
    );
}

export default Home;