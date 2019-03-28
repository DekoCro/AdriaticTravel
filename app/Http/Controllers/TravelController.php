<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\City;
use App\Country;
use App\Food;
use App\Accomodation;
use App\Place;
use App\Food_Review;
use App\Accomodation_Review;

class TravelController extends Controller
{
    public function countries()
    {
        return Country::all();
    }

    public function cities($id)
    {  
        $country = Country::findOrFail($id);
        $cities = $country->city;
        return $cities;  
    }

    public function city($cityId)
    {
        $city = City::where('id', $cityId)->get();
        return $city;
    }

    public function food($cityId)
    {
        $food = Food::where('city_id', $cityId)->get();
        return $food;
    }

    public function restaurant($cityId, $food_id) {

        $food = Food::where('city_id', $cityId)->find($food_id);
        return $food;
    }

    public function store_food(Request $request, $city_id, $food_id) {

        $request = request();
  
        $review = new Food_Review;
        
        $review->review = $request->input('review');
   
        $review->food_id = $food_id;

        $review->user_id = \Auth::id();

        $review->rating = $request->input('rating');

        $review->title = $request->input('title');

        $review->save();

        return $review;
    }

    public function accomodations($cityId)
    {
        $accomodations = Accomodation::where('city_id', $cityId)->get();
        return $accomodations;
    }

    public function hotel($cityId, $acc_id) {

        $hotel = Accomodation::where('city_id', $cityId)->find($acc_id);
        return $hotel;
    }

    public function store_hotel(Request $request, $city_id, $acc_id) {

        $request = request();
  
        $review = new Accomodation_Review;
        
        $review->review = $request->input('review');
   
        $review->accomodation_id = $acc_id;

        $review->user_id = \Auth::id();

        $review->rating = $request->input('rating');

        $review->title = $request->input('title');

        $review->save();

        return $review;
    }

    public function places($cityId)
    {
        $place = Place::where('city_id', $cityId)->get();
        return $place;
    }

    public function food_review($city_id, $food_id)
    {
        $review = Food_Review::with('user')->where('food_id', $food_id)->get();
        return $review;
    }

    public function hotel_review($city_id, $acc_id)
    {
        $review = Accomodation_Review::with('user')->where('accomodation_id', $acc_id)->get();
        return $review;
    }
}
