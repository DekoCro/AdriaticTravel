import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';

export default class Cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }


    
     componentDidMount() {

        const countryId = this.props.match.params.id;
        axios.get(`http://final.localhost:8080/api/countries/${countryId}/cities`)
        .then(response => {
            console.log(response)
            this.setState({
                isLoaded: true,
                items: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        const countryId = this.props.match.params.id;
        let content = "";
        // console.log(this.state.items)
        if(this.state.isLoaded) {
            let countries = [];
            this.state.items.forEach(item => {
                countries.push(
                    <div data-aos="fade-up" className="city_card" data-aos-offset="80" data-aos-easing="ease-in-sine" data-aos-anchor-placement="top-bottom" key={item.id}>
                     <img className="city_img" src={`/img/cities/${item.image}`} />
                    <div className="small_city_img_bg"></div>
                    <Link className="city_arrow_link" to={`/cities/${item.id}`}><i class="fas fa-chevron-right"></i></Link>
                    <Link className="city_link" to={`/cities/${item.id}`}>{item.name}</Link>
                    </div>)
            });
            content = countries;
        } else {
            content = "Loading!";
        }
        
        return (
            <>
            <div className="header_city">
                  <i className="fas fa-globe-europe globe_icon" />
                  <h5>Choose City</h5>
            </div>
                <div className="headerShadow"></div>
                <div className="headerShadow"></div>
           <div className="city_box">
            {content}
           </div>
           </>
        );
    }
}