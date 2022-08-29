import { Helmet } from 'react-helmet';

import React from 'react';

function ReactHelmet(props) {
    const { title, description, image, ogTitle, ogDescription } = props;

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:type" content="website" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta
                property="og:image"
                content={image || '%PUBLIC_URL%/icon.png'}
            />
        </Helmet>
    );
}

export default ReactHelmet;
