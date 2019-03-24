<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Place_Review extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
