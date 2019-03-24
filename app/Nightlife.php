<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Nightlife extends Model
{
    public function city()
    {
        return $this->belongsTo('App\City');
    }
}
