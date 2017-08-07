import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import PageHome from './pages/PageHome';
import Page404 from './pages/Page404';

class App extends Component {
    constructor(p) {
        super(p);

        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.setState({
            loaded: true
        });
    }

    render() {
        let loadedClass = (this.state.loaded ? 'is-Loaded' : '');

        return (
            <Router><ScrollToTop>
                <div id='page-wrapper' className={loadedClass}>
                    <Switch>
                        <Route exact path='/' component={PageHome} />
                        <Route component={Page404} />
                    </Switch>
                </div>
            </ScrollToTop></Router>
    );
  }
}

export default App;
