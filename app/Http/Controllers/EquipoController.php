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
    public function show($id)
    {
       try {

            $equipo = Equipo::find($id);
            $equipo->categoria;
            $equipo->departamento;
            $emplea = $equipo->empleados;
            $data = [];
            $data1 = [];
            foreach ($emplea as $a) {

                $d = $a->dato;
                $asig = $a->asignacion;
                $depar = $a->departamento;

                $data1 = [
                           'id' => $a['id'],
                           'nombre' => $d->nombre,
                           'apellido' => $d->apellido,
                           'telefono' => $d->telefono,
                           'avatar' => $d->avatar,
                           'cedula' => $d->cedula,
                           'departamento' => $depar->departamento,
                           'asignacion' => $asig->asignacion ];

                $data[] = $data1;

            }

            $equipo['datos_empleados'] = $data;

            return response()->json($equipo,200);

       } catch (Exception $e) {
           return response()->json($e,500);
       }
    }
}
