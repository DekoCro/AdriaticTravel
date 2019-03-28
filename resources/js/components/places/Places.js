import React, { Component } from 'react';
import axios from 'axios';

export default class Places extends Component {
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
        axios.get(`/api/cities/${cityId}/places`)
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
                    <div className="places_card" key={item.id}>
                        <div className="place_bar">
                           <div className="place_row">
                                <img className="place_icon" src={`/img/places/${item.image}`} />
                                <h2 className="place_name">{item.name}</h2>
                           </div>
                            <div className="place_column">
                                <h5 className="place_description">{item.about}</h5>
                                <h6 className="place_location">Location: {item.location}</h6>
                            </div>
                            
                        </div>
                    </div>)
            });
            content = countries;
        } else {
            content = <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
        }
        
        return (
            <div className="places_box">
                <h2 className="place_heading">Our top pick: <i className="fas fa-map-marker-alt place_heading_icon"></i></h2>
                <hr />
                {content}
            </div>
        );
    }
}