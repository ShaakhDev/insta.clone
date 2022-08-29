import MetaLayout from '../components/layout/MetaLayout';
import Posts from './Posts';
import nprogress from 'nprogress';
import { useEffect } from 'react';

const meta = {
    title: 'Instaclone',
    description:
        'Instaclone clone is a photo-sharing platform where users can upload, view, and share photos.',
};

function Home() {
    useEffect(() => {
        setTimeout(() => {
            nprogress.done();
        }, 1000);
    }, []);
    return (
        <MetaLayout {...meta}>
            <Posts />
        </MetaLayout>
    );
}

export default Home;
