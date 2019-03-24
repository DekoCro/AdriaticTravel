import React, { Component } from 'react';
import axios from 'axios';

export default class Acc extends Component {
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
        axios.get(`http://final.localhost:8080/api/cities/${cityId}/accomodation`)
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
                    <div className="card-body" key={item.id}>
                        <h1>{item.name}</h1>
                    </div>)
            });
            content = countries;
        } else {
            content = "Loading!";
        }
        
        return (
           <div>{content}</div>
        );
    }
}