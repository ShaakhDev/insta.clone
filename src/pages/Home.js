
import MainHeader from "../components/layout/MainHeader";
import {Outlet} from "react-router-dom";



function Home() {


    return (
        <>
            <MainHeader />
            <Outlet/>
        </>
    );
}

export default Home;