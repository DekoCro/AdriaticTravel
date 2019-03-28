import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

export default class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    
    componentDidMount() {
        const cityId = this.props.match.params.id;
        axios.get(`/api/cities/${cityId}/accomodation`)
        .then(response => {
            this.setState({
                isLoaded: true,
                items: response.data
                
            })
            console.log(response);
        })
        .catch(error => console.log(error))
    }
    render() {
        let content = "";
        let city = "";
        if(this.state.isLoaded) {
            let countries = [];
            this.state.items.forEach(item => {
                countries.push(
                    <div className="hotel_card" key={item.id}>
                       <Link className="hotel_name" to={`/cities/${item.city_id}/accomodation/${item.id}`}>{item.name}</Link>
                        <img className="hotel_img" src={`/img/accomodation/${item.image}`} />
                    </div>
                    )
            });
            content = countries;
        } else {
            content = <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
        }

        if(this.state.isLoaded) {
            let title = [];
                title.push(
                    <div className="city_menu_card" key={this.state.items[0].id}>
                        <h1 className="city_menu_name">{this.state.items[0].city_name}</h1>
                        <img className="city_menu_img" src={`/img/cities/${this.state.items[0].city_image}`} />
                    </div>
                )
            city = title;
        }

        return (
            <div className="acc_box">
            <hr />
                {city}
                <hr />
                <h2 className="acc_heading">Our top pick: <i className="fas fa-bed acc_heading_icon"></i></h2>
                {content}
            </div>
        );
    }
}