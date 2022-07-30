import styles from '../../styles/Profile.module.css'
import PostItem from "./postItem";


function UserPosts({ profile }) {

    return (
        <>
            <section className={styles.posts}>
                {profile?.items?.map(post => {
                    const { id, image_url, likes, comments } = post;
                    return <PostItem key={id} id={id} comments={comments?.length} likes={likes} image={image_url} />
                })}

            </section>
        </>
    );
}

export default UserPosts;