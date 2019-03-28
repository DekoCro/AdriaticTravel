import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';

export default class Cities extends Component {
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
        const countryId = this.props.match.params.id;
        axios.get(`/api/countries/${countryId}/cities`)
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
        let content = "";
        let country = "";
        if(this.state.isLoaded) {
            let index = 0;
            let countries = [];
            this.state.items.forEach(item => {
                index+= 1;
                countries.push(
                    <div data-aos="fade-up" className="city_card" data-aos-offset="80" data-aos-easing="ease-in-sine" data-aos-anchor-placement="top-bottom" key={item.id}>
                        <img className={`city_img_${(index%2 == 0) ? 'left' : 'right'}`} src={`/img/cities/${item.image}`} />
                        <div  className={`city_img_bg_${(index%2 == 0) ? 'left' : 'right'}`}></div>
                        <Link className={`city_arrow_link_${(index%2 == 0) ? 'left' : 'right'}`} to={`/cities/${item.id}`}><i className={`fas fa-chevron-${(index%2 == 0) ? 'left' : 'right'}`}></i></Link>
                        <Link className={`city_link_${(index%2 == 0) ? 'left' : 'right'}`} to={`/cities/${item.id}`}>{item.name}<p className="short_desc">{item.short_desc}</p></Link>
                    </div>
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
                        <div className="expand" onClick={this.expandView.bind(this)}><span>About {item.country_name} <i className={!this.state.toggle ? "fas fa-arrow-circle-down expand_arrow" : "fas fa-arrow-circle-up expand_arrow" }></i></span></div>
                        <div className={!this.state.toggle ? 'headerAbout' : 'headerAbout city_description'}><br />
                            <div className="country_stats">
                                <div>
                                    <span className="dropdown_heading">Population:</span>
                                    <span><i className="fas fa-users"></i>  {item.country_population}</span>
                                </div>
                                <div>
                                    <span className="dropdown_heading">Local currency:</span>
                                    <span><i className="fas fa-money-bill"></i>  {item.country_currency}</span>
                                </div>
                            </div>
                            <p className="country_facts"><span className="extended_heading">Facts about {item.country_name}</span>{item.country_quote}</p>
                            
                            <span className="extended_heading">Adriatic coast of {item.country_name}:</span>
                            <span>{item.country_description}<br /></span>
                        </div>
                    </section>
                )
            });
            country = title;
        }
        
        return (
            <>
                {country}
                <div className="city_box">
                    {content}
                </div>
           </>
        );
    }
}