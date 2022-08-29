import ReactHelmet from './ReactHelmet';
import React from 'react';

function MetaLayout(props) {
    return (
        <React.Fragment>
            <ReactHelmet {...props} />
            {props.children}
        </React.Fragment>
    );
}

export default MetaLayout;
