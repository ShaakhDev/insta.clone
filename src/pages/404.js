import React, { useEffect } from 'react'
import Layout from '../components/layout/MainHeader'
import { Link } from 'react-router-dom'
import nprogress from 'nprogress'

const styles = {
    container: {
        marginTop: '15vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 6rem',
        justifyContent: 'flex-start',
    },
    h1: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#333'
    },
    p: {
        fontSize: '1.8rem',
        marginTop: '2rem',
        color: '#333',
        textAliign: 'center'
    },
    a: {
        color: 'rgb(0,55,107)'
    }
}

function PageNotFound() {

    useEffect(() => {
        setTimeout(() => {
            nprogress.done()
        }, 1000)
    }, [])

    return (
        <Layout>
            <div style={styles.container}>

                <h1 style={styles.h1}>Sorry, this page isn't available.</h1>
                <p style={styles.p}>The link you followed may be broken, or page may have been removed. &nbsp;
                    <Link style={styles.a} to='/'>
                        Go back to Instagram.
                    </Link>
                </p>
            </div>
        </Layout>
    )
}

export default PageNotFound