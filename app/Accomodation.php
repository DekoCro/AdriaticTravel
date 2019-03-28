<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Accomodation extends Model
{
    protected $appends = [
        'city_name',
        'city_image'
    ];
    
    public function city()
    {
        return $this->belongsTo('App\City');
    }
    public function getCityNameAttribute()
    {
        return $this->city->name;
    }
    public function getCityImageAttribute()
    {
        return $this->city->image;
    }
}
