import React, { Component } from 'react';

import { Header, Tail } from './components';
import { PostContainer } from './containers';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <PostContainer/>
                <Tail/>
            </div>
        );
    }
}

export default App;
