import React, { Component } from 'react';
import axios from 'axios';

export default class Hotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            text_value: "",
            rating_value: 0,
            title: "",
            reviews: []
        }
    }

    componentDidMount() {
        const cityId = this.props.match.params.id;
        const accId = this.props.match.params.hotel_id;
        axios.get(`/api/cities/${cityId}/accomodation/${accId}`)
        .then(response => {
            this.setState({
                isLoaded: true,
                items: response.data     
            })
        })
        .catch(error => console.log(error))
        
        axios.get(`/api/cities/${cityId}/accomodation/${accId}/reviews`)
        .then(response => {
            this.setState({
                isLoaded: true,
                reviews: response.data     
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        let content = "";
        const cityId = this.props.match.params.id;
        const accId = this.props.match.params.hotel_id;
        let stars = [];
        for(let i = 1; i < 6; i++) {
            stars.push(
                <i className={this.state.rating_value < i ? 'far fa-star' : 'fa fa-star golden'} key={i} name="rating" onClick={() => {
                    this.setState({
                        rating_value: i
                        })
                    }}></i>
            )
        }
        if(this.state.isLoaded) {
            let foods = [];
                foods.push(
                    <section key={this.state.items.id}>
                        <div className="food_card">
                            <h1 className="food_name">{this.state.items.name}</h1>
                            <img className="food_img" src={`/img/accomodation/${this.state.items.image}`} />
                        </div>
                        <div className="food_stats">
                            <p><i className="fas fa-map-marker-alt stats"></i>  Location: {this.state.items.city_name}</p>
                            <p><i className="fas fa-money-bill stats"></i> Average price: {this.state.items.avg_price} € </p>
                        </div>
                        <form onSubmit={event => {
                            event.preventDefault();
                            axios.post(`/api/cities/${cityId}/accomodation/${accId}` , {
                                rating: this.state.rating_value,
                                review: this.state.text_value,
                                title: this.state.title
                            })
                            .then(response => {
                                let reviews = this.state.reviews;
                                reviews.push(
                                    response.data
                                )
                                this.setState({
                                    reviews: reviews
                                })
                            })
                        }}>
                            <header className="hotel_header">
                                <h3><i className="fas fa-pencil-alt rate_icon"></i> Rate and review</h3>
                            </header>
                            <div className="star_rating">
                                <div className="user_message">
                                    <i className="far fa-user-circle user_icon"></i>
                                    <div>
                                        <h3>{this.state.name}</h3>
                                        <p>Your review will be posted publicly on the web.</p>
                                    </div>
                                </div>
                                <div className="star_box">
                                    <span>Rate here:</span>
                                    {stars}
                                </div>
                            </div>
                            <div className="inputBox">
                                <input name="title" type="text" onChange={event => {
                                    this.setState({
                                        title: event.target.value
                                    })
                                }} value={this.state.title} placeholder="Title ex.excellent, good, terrible"/> 
                            </div>    
                            <textarea name="review" type="text" rows="5" cols="38" onChange={event => {
                                this.setState({
                                    text_value: event.target.value
                                })
                            }} value={this.state.text_value} placeholder="Describe your experience..."></textarea>
                            <input type="submit" value="Post" className="post_hotel"/>
                        </form>
                        <hr />
                    </section>)
            content = foods;
        } else {
            content = <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
        }

        let review = "";
        // let user_star = [];
        // for(let i = 0; i < this.state.rating_value; i++) {
        //     user_star.push(
        //     <i className="fa fa-star user_golden_star" key={i}></i>
        //     )
        // }
        if(this.state.isLoaded) {
            let user_ex = [];
            this.state.reviews.forEach(item => {
                user_ex.push(
                    <div key={item.id} className="review_list">
                        <div className="hotel_username">
                            <i className="far fa-user-circle other_user_icon"></i>
                            <h2>{item.user ? item.user.name : 'Unknown user'}</h2>
                        </div>
                        <article className="rews">
                            <h3 className="review_rating">Rating: {item.rating} out of 5</h3>
                            <h3 className="review_top">{item.title}</h3>
                            <p className="review_text">{item.review}</p>
                        </article>
                    </div>
                    )
            });
            review = user_ex;
        } else {
            review = "Loading!";
        }
        
        return (
            <div className="food_box">
                {content}
                <h3 className="review_title">Reviews:</h3>
                {review}
            </div>
        );
    }
}