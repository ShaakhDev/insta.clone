import MainHeader from "../components/layout/MainHeader";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useGetCurrentUserMutation } from "../rtk/usersApi";
import { GetToken, CurrentUser } from "../rtk/authSlice";


function Home() {
    const user = CurrentUser();
    const token = GetToken();
    const [getCurrentUser, { data, isSuccess, isError, error }] = useGetCurrentUserMutation(1);

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [isSuccess, data])

    useEffect(() => {
        if (token && user) {
            getCurrentUser();
        }
    }, [token, user, getCurrentUser])

    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
}



export default Home;




