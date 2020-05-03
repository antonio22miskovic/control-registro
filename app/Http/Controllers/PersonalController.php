<?php

namespace App\Http\Controllers;

use App\Dato;
use App\Empleado;
use Illuminate\Http\Request;

class PersonalController extends Controller
{
    public function pesonal(Request $request , $departamento)
    {

        $personal = Empleado::orderBy('id', 'desc')->where('departamento_id',$departamento)->paginate(3);

        	$arraydatos = [];
        	$arrayasignacion = [];

        	foreach ($personal as $p) {

        		$datos = $p->dato;
        		$asignacion = $p->asignacion;
        		$datos['asignacion'] = $asignacion['asignacion'];
        		$arraydatos[] = $datos;

        	}

        return [

            'paginate' => [

                'total' => $personal->total(),
                'current_page' => $personal->currentPage(),
                'per_page' => $personal->perPage(),
                'last_page' => $personal->lastPage(),
                'from' => $personal->firstItem(),
                'to' => $personal->lastPage(),

            ],

           'personal' => $arraydatos,

        ];

    }

    public function store(Request $request)
    {
    	if ($request['avatar'] === 0) {

    		$filename = 'defect.jpg';

    	}else{

    		$exploded = explode(',', $request->avatar);
        	$decoded =base64_decode($exploded[1]);

        	if (str_contains($exploded[0], 'jpeg')) {

                   $extension = 'jpg';

        	}else{

                    $extension = 'png';

        	}

        	$filename = str_random().'.'.$extension;

        	$path = public_path().'/img/avatares/'.$filename;

        	file_put_contents($path, $decoded);

    	}

      $dato = Dato::create([

        	'nombre' => $request['nombre'],
        	'apellido' =>$request['apellido'],
        	'cedula' => $request['cedula'],
        	'telefono' => $request['telefono'],
        	'avatar' => $filename

        ]);

      $empleado = Empleado::create([

        	'dato_id' => $dato->id,
        	'asignacion_id' => $request['asignacion'],
        	'departamento_id' => $request['departamento']

        ]);

    }
}
