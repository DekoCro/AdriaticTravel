import React, { Component } from 'react';
import axios from 'axios';

export default class City extends Component {
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
        let content = "";
        if(this.state.isLoaded) {
            let countries = [];
            this.state.items.forEach(item => {
                countries.push(
                    <div className="cost_card" key={item.id}>
                        <div className="cost_header"><i className="fas fa-euro-sign"></i></div>
                        <div className="currency_box">
                            <h3><span className="currency_heading">{item.name}</span><br /><span className="country_currency">{item.country_name}</span></h3>
                            <h3><span className="currency_heading">Currency:</span><br /><span className="country_currency">{item.country_currency}</span></h3>
                        </div>
                        <hr />
                        <h2>Daily Cost</h2>
                        <section>
                            <div>
                                <h3>Budget: Less than {item.low}</h3>
                                <h6>{item.min_cost}</h6>
                            </div>
                            <div>
                                <h3>Midrange: {item.mid}</h3>
                                <h6>{item.middle_cost}</h6>
                            </div>
                            <div>
                                <h3>Top end: More than {item.top}</h3>
                                <h6>{item.max_cost}</h6>
                            </div>
                        </section>
                    </div>)
            });
            content = countries;
        } else {
            content = <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
        }
        
        return (
            <>
            <div className="cost_box"></div>
            {content}
            </>
        );
    }
}