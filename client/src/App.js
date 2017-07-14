import React, { Component } from 'react'
import Header from './components/header/Header'
import Viewer from './components/log-viewer/Viewer'
import './App.css'

let baseUrl  = 'http://localhost:3001/'

if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://log-file-viewer.herokuapp.com/'
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Viewer baseUrl={baseUrl} />
            </div>
        );
    }
}

export default App;
