<?php

namespace App\Http\Controllers;

use App\Asignacion;
use App\Categoria;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InfoController extends Controller
{
	protected $user;
    protected $datos;
    protected $cede;
    protected $departamentos;

    public function __construct()
    {
    	$this->user = auth('api')->user();
    	$this->datos = $this->user->dato;
    	$this->cede = $this->user->cede;
    	$this->departamentos = $this->cede->departamentos;
    }

	public function getdatos()
	{
		return $this->datos;
	}
    public function getcede()
    {
        return $this->cede;
    }
    public function getdepartamentos()
    {
        return $this->departamentos;
    }
    public function getcategorias()
    {
        return Categoria::all();
    }
    public function getusers()
    {
       $users = User::where('cede_id',$this->cede->id)->get();
       $data = [];
       foreach ($users as $user) {
            $datos = $user->dato;
          $push = ['username' => $user['username'],
                    'email' => $user['email'],
                    'nombre' => $datos->nombre,
                    'apellido' => $datos->apellido,
                    'cedula' => $datos->cedula,
                    'telefono' => $datos->telefono,
                    'avatar' => $datos->avatar ];

             $data[] = $push;
       }
        return $data;
    }
    public function getasignaciones()
    {
        return Asignacion::all();
    }

}
