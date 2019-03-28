<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    // return "ahha";
    return Auth::user();
});

//List of all the countries
Route::get('/countries', 'TravelController@countries');
//List of all the cities inside of one country
Route::get('/countries/{id}/cities', 'TravelController@cities');
//List of the specific city inside of one country
Route::get('/cities/{city_id}', 'TravelController@city');

Route::get('/cities/{city_id}/food', 'TravelController@food');
Route::get('/cities/{city_id}/food/{food_id}', 'TravelController@restaurant');
Route::post('/cities/{city_id}/food/{food_id}', 'TravelController@store_food');
Route::get('/cities/{city_id}/food/{food_id}/reviews', 'TravelController@food_review');

Route::get('/cities/{city_id}/accomodation', 'TravelController@accomodations');
Route::get('/cities/{city_id}/accomodation/{acc_id}', 'TravelController@hotel');
Route::post('/cities/{city_id}/accomodation/{acc_id}', 'TravelController@store_hotel');
Route::get('/cities/{city_id}/accomodation/{acc_id}/reviews', 'TravelController@hotel_review');


Route::get('/cities/{city_id}/places', 'TravelController@places');
Route::get('/cities/{city_id}/cost', 'TravelController@cities');