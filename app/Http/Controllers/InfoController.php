<?php

namespace App\Http\Controllers;

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
    	$this->departamento = $this->cede->departamentos;
    }

	public function getdatos()
	{
		return response()->json($this->datos);
	}
    public function getcede()
    {
        return response()->json($this->cede);
    }
}
