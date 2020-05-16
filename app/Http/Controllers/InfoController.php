<?php

namespace App\Http\Controllers;

use App\Categoria;
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

}
