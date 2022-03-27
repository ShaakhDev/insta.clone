import MainHeader from "../components/layout/MainHeader";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {getCurrentUser} from "../store/actions/userActions";
import {useDispatch, useSelector} from "react-redux";

function Home() {
    const dispatch = useDispatch();
    const {token} = useSelector(state => state?.user);

    useEffect(() => {
        if (token!==null) dispatch(getCurrentUser())
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