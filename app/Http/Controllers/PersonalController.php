<?php

namespace App\Http\Controllers;

use App\Dato;
use App\Empleado;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PersonalController extends Controller
{
    public function pesonal(Request $request , $departamento)
    {

        $personal = Empleado::orderBy('id', 'desc')->where('departamento_id',$departamento)->paginate(6);

        	$arraydatos = [];

        	foreach ($personal as $p) {

                $id = $p['id'];
        		$datos = $p->dato;
        		$asignacion = $p->asignacion;
        		$datos['asignacion'] = $asignacion['asignacion'];
                $datos['id_empleado'] = $id;
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
    try {

    	if ($request['avatar'] === 0) {

    		$filename = 'defect.jpg';

    	}else{

    		$exploded = explode(',', $request->avatar);
        	$decoded =base64_decode($exploded[1]);

        	if (Str::contains($exploded[0], 'jpeg')) {

                   $extension = 'jpg';

        	}else{

                    $extension = 'png';

        	}

        	$filename = Str::random().'.'.$extension;

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

      	 return response()->json(true,201);

    } catch (Exception $e) {

    	return response()->json($e,500);

    }

    }

    public function show($id)
    {
        try {

            $empleado = Empleado::find($id);
            $empleado->equipos;
            $empleado->departamento;
            $empleado->dato;
            return $empleado;

        } catch (Exception $e) {

            return response()->json($e,500);
        }

    }

    public function update(Request $request, $id)
    {
        try {



        } catch (Exception $e) {

        }
    }

    public function delete($id)
    {
      try {

        $empleado = Empleado::find($id);
        $datos = $empleado->dato();
        $datos->delete();
        $empleado->delete();

        return response()->json('eliminado con exito',200);

      } catch (Exception $e) {
            return response()->json($e,200);
      }
    }
}
