<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    protected $appends = ['city_name'];

    public function city()
    {
        return $this->belongsTo('App\City');
    }

    public function getCityNameAttribute()
    {
        return $this->city->name;
    }
}
