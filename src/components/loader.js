function Loader() {
    return (
        <div className="loader">
            <img
                src={process.env.PUBLIC_URL + '/icon.png'}
                alt="instaclone logo"
            />
        </div>
    );
}

export default Loader;
