import Layout from "../components/layout/MainHeader";
import { Outlet } from "react-router-dom";
import Posts from "./Posts";
import { useEffect } from "react";
import { useGetCurrentUserMutation } from "../rtk/usersApi";
import { GetToken, CurrentUser } from "../rtk/authSlice";


function Home() {


    return (
        <Layout>
            <Posts />
        </Layout>
    );
}



export default Home;




