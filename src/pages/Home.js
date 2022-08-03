import Layout from "../components/layout/MainHeader";
import Posts from "./Posts";
import nprogress from "nprogress";
import { useEffect } from "react";

function Home() {

    useEffect(() => {
        setInterval(() => {
            nprogress.done();
        }, 1000)
    }, [])
    return (
        <Layout>
            <Posts />
        </Layout>
    );
}



export default Home;




