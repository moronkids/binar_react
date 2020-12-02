import React, { Component } from 'react';
import OverlayProvider from '../Provider/OverlayProvider'
import Homey from '../components/Home.jsx'
class Home extends Component {
    render() {
        return (
            <OverlayProvider>
                <Homey/>
            </OverlayProvider>
        );
    }
}

export default Home;
