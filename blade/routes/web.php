<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('base');
});

Route::resource('developers', 'App\Http\Controllers\DeveloperController');
