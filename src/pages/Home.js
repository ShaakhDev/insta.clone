import React from 'react';
import PostCard from "../components/posts/card";
import MainHeader from "../components/layout/MainHeader";
import styles from '../styles/Home.module.css'

function Home() {
    return (
        <>
            <MainHeader/>
            <main className={styles.home}>
                <div className={styles.box}>
                    <PostCard/>
                </div>
            </main>
        </>
    );
}

export default Home;