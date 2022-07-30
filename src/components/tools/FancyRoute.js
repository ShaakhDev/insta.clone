import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Component } from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';


class FancyRoute extends Component {
    componentWillMount() {
        nprogress.start();
    }

    componentDidMount() {
        nprogress.done();
    }

    render() {
        return (
            { ...this.props.children } || null
        );
    }
}

export default FancyRoute;