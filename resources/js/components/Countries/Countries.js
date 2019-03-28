import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

export default class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
       axios.get(`/api/countries`)
        .then(response => {
            this.setState({
                isLoaded: true,
                items: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        let content = "";
        if(this.state.isLoaded) {
            let countries = [];
            this.state.items.forEach(item => {
                countries.push(
                    <div className="country_card" key={item.id}>
                        <img className="country_img" src={`/img/countries/${item.image}`} />
                        <Link className="country_name"  to={`/countries/${item.id}/cities`}><span className="title">{item.name}</span><br /><span className="slogan">{item.slogan}</span></Link>
                    </div>)
            });
            content = countries;
        } else {
            content = <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
        }
        
        return (
            <>
            <div className="header">
                  <i className="fas fa-globe-europe globe_icon" />
                  <h5>Choose country</h5>
            </div>
                <div className="headerShadow"></div>
                <div className="headerShadow"></div>
           <div className="country_box">
            {content}
           </div>
           </>
        );
    }
}