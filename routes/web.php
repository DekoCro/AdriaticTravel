<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (\Auth::check()) {
        return view('welcome');
    } else {
        return view('auth/login');
    }
    
});

Auth::routes();

Route::view('/countries', 'welcome');
Route::view('/countries/{id}/cities', 'welcome');
Route::view('/cities/{city_id}', 'welcome');
Route::view('/cities/{city_id}/food', 'welcome');
Route::view('/cities/{city_id}/food/{food_id}', 'welcome');
Route::view('/cities/{city_id}/accomodation/{acc_id}', 'welcome');
Route::view('/cities/{city_id}/accomodation', 'welcome');
Route::view('/cities/{city_id}/places', 'welcome');
Route::view('/cities/{city_id}/cost', 'welcome');

Route::get('/redirect/facebook', 'SocialAuthFacebookController@redirect');
Route::get('/callback/facebook', 'SocialAuthFacebookController@callback');

Route::get('/redirect/google', 'SocialAuthGoogleController@redirect');
Route::get('/callback/google', 'SocialAuthGoogleController@callback');

Route::get('/home', 'NavController@home');
Route::get('/about', 'NavController@about');
Route::get('/contact', 'NavController@contact');

