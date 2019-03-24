<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\City;
use App\Country;
use App\Food;
use App\Accomodation;
use App\Place;


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

    public function accomodations($cityId)
    {
        $accomodations = Accomodation::where('city_id', $cityId)->get();
        return $accomodations;
    }

    public function places($cityId)
    {
        $place = Place::where('city_id', $cityId)->get();
        return $place;
    }
}
