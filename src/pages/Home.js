import MainHeader from "../components/layout/MainHeader";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useGetCurrentUserQuery } from "../rtk/usersApi";



function Home() {
    const { data, isSuccess } = useGetCurrentUserQuery(1);

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [isSuccess, data])


    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
}

export default Home;