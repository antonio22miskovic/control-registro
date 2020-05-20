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
                           'id' => $a['id'] ,
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
    public function store(Request $request)
    {
        try {
          Equipo::create($request->all());
          return response()->json(true,201);
        } catch (Exception $e) {
          return response()->json($e,500);
        }
    }
     public function status(Request $request, $depa, $status)
    {
        try {

        $equipo = Equipo::orderBy('id', 'desc')->where('departamento_id',$depa)->where('status',$status)->paginate(5);
          $data = [];
          $push = [];
       foreach ($equipo as $array) {
          $cate =  $array->categoria;
         $push =['id' => $array['id'],
                'equipo' => $array['equipo'],
                'codigo' => $array['codigo'],
                'modelo' => $array['modelo'],
                'marca' => $array['marca'],
                'status' => $array['status'],
                'descripcion' => $array['descripcion'],
                'departamento_id' => $array['departamento_id'],
                'categoria' => $cate['categoria'],
                'categoria_id' => $cate['id'],
              ];
              $data[] = $push;

       }

        return [

            'paginate' => [

                'total' => $equipo->total(),
                'current_page' => $equipo->currentPage(),
                'per_page' => $equipo->perPage(),
                'last_page' => $equipo->lastPage(),
                'from' => $equipo->firstItem(),
                'to' => $equipo->lastPage(),

            ],

           'equipo' => $data

        ];

        } catch (Exception $e) {
          return response()->json($e,500);
        }
    }

    public function update(Request $request,$id)
    {
        try {

          $equipo = Equipo::find($id);
          $equipo->update($request->all());
          return response()->json(true,201);


        } catch (Exception $e) {
             return response()->json($e,201);
        }
    }
    public function delete($id)
    {
      try {
        $equipo = Equipo::find($id);
        $equipo->delete();
      return response()->json(true,200);
      } catch (Exception $e) {
        return response()->json($e,500);
      }
    }
}
