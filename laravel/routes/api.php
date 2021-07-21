<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/developers', 'DeveloperController@index')->name('developers.all');

Route::post('/developers', 'DeveloperController@store')->name('developers.store');

Route::get('/developers/{developer}', 'DeveloperController@show')->name('developers.show');

Route::put('/developers/{developer}', 'DeveloperController@update')->name('developers.update');

Route::delete('/developers/{developer}', 'DeveloperController@destroy')->name('developers.destroy');
