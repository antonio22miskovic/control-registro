<?php

namespace App\Http\Controllers;

use App\Asignacion;
use App\Categoria;
use App\Cede;
use App\Departamento;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InfoController extends Controller
{
	  protected $user;
    protected $datos;
    protected $cede;

    public function __construct()
    {
    	$this->user = auth('api')->user();
    	$this->datos = $this->user->dato;

    }

	public function getdatos()
	{  $array = [ 'username' => $this->user->username,
                  'email' => $this->user->email,
                  'nombre' => $this->datos->nombre,
                  'apellido' => $this->datos->apellido,
                  'cedula' => $this->datos->cedula,
                  'telefono' => $this->datos->telefono,
                  'avatar' => $this->datos->avatar,
                  'rol_id' => $this->user->rol_id ];

        return response()->json($array,200);
	}

    public function getcede()
    {
       $cede = Cede::where('id',$this->user->cede_id)->first();
        return response()->json($cede,200);
    }
    public function getdepartamentos()
    {
        $departamentos = Departamento::where('cede_id',$this->user->cede_id)->get();
        return response()->json($departamentos,200);
    }
    public function getcategorias()
    {
        return Categoria::all();
    }
    public function getusers()
    {
       $users = User::where('cede_id',$this->user->cede_id)->get();
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
    public function getAllCedes()
    {
      return Cede::all();
    }

}
