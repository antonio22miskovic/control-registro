<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix' => 'auth'], function ($router) {

    	Route::post('login', 'JwtController@login');
    	Route::post('logout', 'JwtController@logout');
    	Route::post('refresh', 'JwtController@refresh');
    	Route::post('me', 'JwtController@me');

	});
 Route::group(['middleware' => 'jwt.auth'], function ($router) {

		Route::get('get-datos','InfoController@getdatos');
		Route::get('get-cede','InfoController@getcede');
		Route::get('get-departamentos','InfoController@getdepartamentos');
		Route::get('listado/{departamento}','PersonalController@pesonal');


 });

 Route::middleware('jwt.refresh')->get('/token/refresh', 'AuthController@refresh');