<?php

namespace App\Http\Controllers;

use App\Dato;
use App\Empleado;
use App\EmpleadoEquipo;
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
                $datos['asignacion_id'] = $asignacion['id'];
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

    	if ($request['avatar'] === null) {

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
            $empleado->asignacion;
            $empleado->dato;
            return $empleado;

        } catch (Exception $e) {

            return response()->json($e,500);
        }

    }

    public function asignar(Request $request)
    {
        try {

             $validar = EmpleadoEquipo::where('empleado_id',$request['empleado'])->where('equipo_id',$request['equipo'])->first();

                if (is_null($validar)) {
                    EmpleadoEquipo::create([
                        'empleado_id' => $request['empleado'],
                        'equipo_id' => $request['equipo']

                    ]);
                    return response()->json(true,201);
                }

                    return response()->json(false,200);

        } catch (Exception $e) {

                response()->json('uff hubo problemas al asignar el equipo intente mas tarde',500);
      }

    }
    public function remover($equipo,$personal)
    {
        try {

            $pivote = EmpleadoEquipo::where('empleado_id',$personal)->where('equipo_id',$equipo)->first();
            if (is_null($pivote)) {
               return response()->json('no encontrado',404);
            }
            $pivote->delete();

            return response()->json('removido',200);

        } catch (Exception $e) {

            return response()->json($e,500);
        }
    }

    public function update(Request $request, $id)
    {
        try {

            $personal = Empleado::find($id);

          $datos =  $personal->dato;

            if ($request['avatar'] === null) {

            $filename = $datos->avatar;

            $updatedatos = $datos->update([

                'nombre' => $request['nombre'],
                'apellido' =>$request['apellido'],
                'cedula' => $request['cedula'],
                'telefono' => $request['telefono'],
                'avatar' => $filename

            ]);
            $personal->update([

                    'asignacion_id' => $request['asignacion'],
                    'departamento_id' => $request['departamento']

            ]);
            return response()->json(true,201);

        }else{

                if ($request['avatar'] === $datos->avatar) {

                    $updatedatos = $datos->update([

                        'nombre' => $request['nombre'],
                        'apellido' =>$request['apellido'],
                        'cedula' => $request['cedula'],
                        'telefono' => $request['telefono'],
                        'avatar' => $filename

                    ]);

                    $personal->update([

                                'asignacion_id' => $request['asignacion'],
                                'departamento_id' => $request['departamento']

                            ]);
                        return response()->json(true,201);

                }else{

                    if ($request['avatar'] != $datos->avatar) {

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

                                $updatedatos = $datos->update([

                                    'nombre' => $request['nombre'],
                                    'apellido' =>$request['apellido'],
                                    'cedula' => $request['cedula'],
                                    'telefono' => $request['telefono'],
                                    'avatar' => $filename

                                    ]);
                                $personal->update([

                                    'asignacion_id' => $request['asignacion'],
                                    'departamento_id' => $request['departamento']

                                ]);
                                      return response()->json(true,201);


                }
        }

    }



        } catch (Exception $e) {
                return response()->json($e,500);
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
