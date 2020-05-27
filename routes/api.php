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

 	/////// INFO CONTROLLER CONTROLADOR DE RETORNO DE INFO BASICA
		Route::get('get-datos','InfoController@getdatos');
		Route::get('get-cede','InfoController@getcede');
		Route::get('get-currentuser','InfoController@getCurrentUser');
		Route::get('get-departamentos','InfoController@getdepartamentos');
		Route::get('get-categorias','InfoController@getcategorias');
		Route::get('get-users','InfoController@getusers');
		Route::get('get-asignaciones','InfoController@getasignaciones');

	/// CONTROLADOR DE MANEJO DEL PERSONAL
		Route::get('listado/{departamento}','PersonalController@pesonal');
		Route::post('personal/store','PersonalController@store');
		Route::put('personal/update/{id}','PersonalController@update');
		Route::delete('personal/delete/{id}','PersonalController@delete');
		Route::get('personal/show/{id}','PersonalController@show');
		Route::get('personal/asignar/equipo/{equipo}/{personal}','PersonalController@asignar');
		Route::get('remover/equipo/{equipo}/{personal}','PersonalController@remover');
		Route::post('asignar/equipo','PersonalController@asignar');

	/// CONTROLADOR DE MANEJO DE ASIGNACIONES
		Route::resource('asignacion', 'AsignacionController');

	/// CONTROLADOR DE MANEJO DE EQUIPOS
		Route::get('equipos/listado/{departamento}','EquipoController@getlist');
		Route::get('equipos/listado/{departamento}/{status}','EquipoController@status');
		Route::get('equipos/show/{equipo}','EquipoController@show');
		Route::post('equipos/store','EquipoController@store');
		Route::delete('equipos/delete/{id}','EquipoController@delete');
		Route::put('equipos/update/{id}','EquipoController@update');

	/// CONTROLADOR DE MANEJO DEL LAS CATEGORIAS
		 Route::resource('categoria', 'CategoriaController');
		 Route::resource('departamento', 'DepartamentoController');

	/// CONTROLADOR DE FILTROS
		Route::get('filtro/empleados/{dato}','FiltroController@FiltroEmpleados');
		Route::get('filtro/equipos/{status}/{dato}','FiltroController@filtroEquipos');
		Route::get('filtro/categoria/{dato}','FiltroController@filtarCategoria');
		Route::get('filtro/departamento/{dato}','FiltroController@filtarDepartamento');
		Route::get('filtro/asignacion/{dato}','FiltroController@filtarAsignacion');

 });

 Route::middleware('jwt.refresh')->get('token/refresh', 'AuthController@refresh');