import React, { Component } from 'react';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Countries from './countries/Countries';
import Cities from './cities/Cities';
import Food from './food/Food';
import Acc from './acc/Acc';
import Places from './places/Places';
import Cost from './cost/Cost';
import Citymenu from './citymenu/Citymenu';



export default class Root extends Component {
    
    render() {
        return (
            <BrowserRouter>
              <div className="background">
                  <Link to="/countries">Countries</Link>
                  <Switch>
                    {/* <Route exact path='/' component={} /> */}
                    <Route exact path='/' component={Countries} />
                    <Route path='/countries/:id/cities' component={Cities} />
                    <Route path='/cities/:id/food' component={Food} />
                    <Route path='/cities/:id/accomodation' component={Acc} />
                    <Route path='/cities/:id/places' component={Places} />
                    <Route path='/cities/:id/cost' component={Cost} />
                    <Route path='/cities/:id' component={Citymenu} />
                    
                    {/* <Route path='/:id' component={SingleProject} /> */}
                  </Switch>
                </div>
              </BrowserRouter>
        );
    }
}

if (document.querySelector('#root')) {
    ReactDOM.render(<Root />, document.querySelector('#root'));
}
