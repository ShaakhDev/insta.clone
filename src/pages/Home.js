import Layout from "../components/layout/Layout";
import Posts from "./Posts";
import nprogress from "nprogress";
import { useEffect } from "react";

const meta = {
    title: "Instagram",
    description: "Instagram clone is a photo-sharing platform where users can upload, view, and share photos.",


}

function Home() {

    useEffect(() => {
        setTimeout(() => {
            nprogress.done();
        }, 1000)
    }, [])
    return (
        <Layout {...meta}>
            <Posts />
        </Layout>
    );
}



export default Home;




