import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import store from './store'

// Containers
import NavigationContainer from './containers/navigation/Index'
import FooterContainer from './containers/footer/Index'
import Loaders from './containers/utilities/Loaders/Index'

// Views
import Home from './views/Home'
import Journal from './views/Journal'
import JournalDetail from './views/Journal/Detail'
import Contact from './views/Contact'
import About from './views/About'

import "./App.scss"

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = store.getState().utils;
    
        store.subscribe (() => {
            this.setState(store.getState().utils);
        })
    }

    render () {
        const { visibility, message } = this.state;

        return (
            <Router>
                <Loaders display={visibility} message={message} />
                <NavigationContainer />

                <Switch>
                    <div className="content">
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/journal" component={Journal} />
                        <Route exact path="/journal/detail" component={JournalDetail} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/about" component={About} />
                    </div>
                </Switch>

                <FooterContainer />
            </Router>
        )
    }
}

export default App