import MainHeader from "../components/layout/MainHeader";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {getCurrentUser} from "../store/actions/userActions";
import {useDispatch, useSelector} from "react-redux";



function Home() {
    const dispatch = useDispatch();
    const {user,token} = useSelector(state => state?.user);

    useEffect(() => {
        if(!user&&token){
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