<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function accomodation_rewiews()
    {
        return $this->hasMany('App\Accomodation');
    }

    public function city_rewiews()
    {
        return $this->hasMany('App\City');
    }

    public function place_rewiews()
    {
        return $this->hasMany('App\Place');
    }

    public function food_rewiews()
    {
        return $this->hasMany('App\Food');
    }
}
