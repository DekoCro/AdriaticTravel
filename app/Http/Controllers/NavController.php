<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NavController extends Controller
{
    public function about()
    {
        return view('layouts/about');
    }
    public function contact()
    {
        return view('layouts/contact');
    }
    public function home()
    {
        return view('/layouts/app');
    }
}
