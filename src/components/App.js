import React, { Component } from 'react'
import { Route } from "react-router-dom";
import CustomKitDisplay from './makeyourownkit/CustomKitDisplay'
import StarterKitsMain from './starterkits/StarterKitsMain'
import HeaderLayout from './home/HeaderLayout'
import Footer from './home/Footer'

class App extends Component {
    render() {
        return (
            <div>
                <HeaderLayout/>
                <Route exact path="/" component={StarterKitsMain} />
                <Route exact path="/collections/all-sets" component={CustomKitDisplay} />
                <Footer/>
            </div>
        )
    }
}

export default App;
