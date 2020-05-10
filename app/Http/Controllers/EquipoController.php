<?php

namespace App\Http\Controllers;

use App\Equipo;
use Illuminate\Http\Request;

class EquipoController extends Controller
{
    public function getlist(Request $request, $depa)
    {
    	 $equipo = Equipo::orderBy('id', 'desc')->where('departamento_id',$depa)->where('status','activo')->paginate(5);

        return [

            'paginate' => [

                'total' => $equipo->total(),
                'current_page' => $equipo->currentPage(),
                'per_page' => $equipo->perPage(),
                'last_page' => $equipo->lastPage(),
                'from' => $equipo->firstItem(),
                'to' => $equipo->lastPage(),

            ],

           'equipo' => $equipo

        ];
    }
}
