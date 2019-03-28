<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $appends = [
        'country_name',
        'country_icon',
        'country_slogan',
        'country_filename',
        'country_population',
        'country_quote',
        'country_currency',
        'country_description'
    ];

    public function food()
    {
        return $this->hasMany('App\Food');
    }

    public function accomodation()
    {
        return $this->hasMany('App\Accomodation');
    }

    public function place()
    {
        return $this->hasMany('App\Place');
    }

    public function nightlife()
    {
        return $this->hasMany('App\Nightlife');
    }

    public function country()
    {
        return $this->belongsTo('App\Country');
    }

    // getting data from country component and making it avaliable for city component
    public function getCountryNameAttribute()
    {
        return $this->country->name;
    }
    public function getCountryIconAttribute()
    {
        return $this->country->icon;
    }
    public function getCountrySloganAttribute()
    {
        return $this->country->slogan;
    }
    public function getCountryFilenameAttribute()
    {
        return $this->country->filename;
    }
    public function getCountryPopulationAttribute()
    {
        return $this->country->population;
    }
    public function getCountryQuoteAttribute()
    {
        return $this->country->quote;
    }
    public function getCountryCurrencyAttribute()
    {
        return $this->country->currency;
    }
    public function getCountryDescriptionAttribute()
    {
        return $this->country->description;
    }
}
