import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom'

export default class Citymenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            toggle: false
        }
    }

    expandView() {
        this.setState({
            ...this.state,
            toggle: !this.state.toggle
        })
    }

    componentDidMount() {
        const cityId = this.props.match.params.id
        axios.get(`/api/cities/${cityId}`)
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
        console.log(this.state);
        let content = "";
        let country = "";
        if(this.state.isLoaded) {
            let countries = [];
            this.state.items.forEach(item => {
                countries.push(
                    <section key={item.id}>
                        <div className={!this.state.toggle ? 'city_menu_card' : ' hide_menu'} key={item.id}>
                            <h1 className="city_menu_name">{item.name}</h1>
                            <img className="city_menu_img" src={`/img/cities/${item.image}`} />
                        </div>
                        <div className="menu_click">
                            <Link className="city_menu_places" to ={`/cities/${item.id}/places`}><i className="fas fa-map-marker-alt"></i>Sights</Link>
                            <Link className="city_menu_food" to ={`/cities/${item.id}/food`}><i className="fas fa-utensils"></i>Food</Link>
                            <Link className="city_menu_acc" to ={`/cities/${item.id}/accomodation`}><i className="fas fa-bed"></i>Accomodation</Link>
                            <Link className="city_menu_cost" to ={`/cities/${item.id}/cost`}><i className="fas fa-euro-sign"></i>Daily Cost</Link>
                        </div>
                    </section>
                    )
            });
            content = countries;
        } else {
            content = <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
        }

        if(this.state.isLoaded) {
            let title = [];
            this.state.items.forEach(item => {
                title.push(
                    <section key={item.id} className={!this.state.toggle ? "" : "dropdown"}>
                    <div className="menu_header" key={item.id}>
                        <img className="country_icon" src={`/img/icons/${item.country_icon}`} />
                        <div className="header_text">
                            <h5>{item.country_name}</h5>
                            <p>{item.country_filename}</p>
                        </div>
                    </div>
                    <div className="expand" onClick={this.expandView.bind(this)}><span>About {item.name} <i className={!this.state.toggle ? "fas fa-arrow-circle-down expand_arrow" : "fas fa-arrow-circle-up expand_arrow" }></i></span></div>
                    <div className={!this.state.toggle ? 'headerAbout' : 'headerAbout city_description'}><br /><span className="descr">{item.description}<br /></span></div>
                    </section>
                )
            });
            country = title;
        }
        
        return (
            <>
                {country}
                <div className="menu_box"></div>
                {content}
            </>
        );
    }
}

