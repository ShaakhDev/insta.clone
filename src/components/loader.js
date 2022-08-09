

function Loader() {

    return (
        <div className="loader">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="instagram logo" />
        </div>
    )
}

export default Loader