import MetaLayout from '../layout/MetaLayout';
import PostCard from '../posts/card/postCard';
import { useGetPostQuery } from '../../rtk/postsApi';
import { useParams } from 'react-router-dom';
import BackButton from '../backButton';

function MobileCurrentPostcard() {
    const params = useParams();
    const { data } = useGetPostQuery(params.postId, 1);

    const _description = data?.caption
        ? `${data?.user?.username} shared a post on Instagram: "${data?.caption}. Follow their account to see more posts"`
        : `${data?.user?.username} shared a photo on Instagram. Follow their account to see more posts.`;

    const _title = data?.caption
        ? `${data?.user?.username} on Instagram: "${data?.caption}"`
        : `Instagram photo by ${data?.user?.username}`;

    const meta = {
        title: _title,
        description: _description,
        image: data?.image_url,
        ogTitle: _title,
        ogDescription: _description,
    };

    return (
        <MetaLayout {...meta}>
            <div style={{ marginTop: '6rem' }}>
                <BackButton />
                {data && <PostCard postData={data} />}
            </div>
        </MetaLayout>
    );
}

export default MobileCurrentPostcard;
