<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $usuarios = User::orderBy('id','desc')->where('rol_id',2)->paginate(5);
        $array = [];
        foreach ($usuarios as $item) {
            $dato = $item->dato;
            $cede = $item->cede;

            $push = [ 'id' => $item['id'],
                      'username' => $item['username'],
                      'nombre' => $dato['nombre'],
                      'apellido' => $dato['apellido'],
                      'cedula' => $dato['cedula'],
                      'telefono' => $dato['telefono'],
                      'email' => $item['email'],
                      'avatar' => $dato['avatar'],
                      'cede' => $cede['cede'],
                      'cede_id' => $cede['cede_id'],
                      'dato_id' => $dato['id']
                      ,];
              $array[] = $push;
        }

        return [

            'paginate' => [

                'total' => $usuarios->total(),
                'current_page' => $usuarios->currentPage(),
                'per_page' => $usuarios->perPage(),
                'last_page' => $usuarios->lastPage(),
                'from' => $usuarios->firstItem(),
                'to' => $usuarios->lastPage(),

            ],

           'usuarios' => $array,

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

       User::create([

            'username' => $request['username'],
            'email' => $request['email'],
            'password' => $request['password'],
            'rol_id' => 2,
            'cede_id' => $request['cede'],
            'dato_id' => $dato ,

        ]);

         return response()->json(true,201);

    } catch (Exception $e) {

        return response()->json($e,500);

    }

    }

    public function show($id)
    {
        try {

            $user = User::find($id);
            $cede = $user->cede;
            $dato = $user->dato;

        return  $show  =  [ 'id' => $user['id'],
                      'username' => $user['username'],
                      'nombre' => $dato['nombre'],
                      'apellido' => $dato['apellido'],
                      'cedula' => $dato['cedula'],
                      'telefono' => $dato['telefono'],
                      'avatar' => $dato['avatar'],
                      'email' => $user['email'],
                      'cede' => $cede['cede'],
                      'cede_id' => $cede['cede_id'],
                      'dato_id' => $dato['id']
                      ,];

        } catch (Exception $e) {
            return response()->json($e,500);
        }
    }


    public function update(Request $request, $id)
    {


        try {

            $user = User::find($id);

          $datos =  $user->dato;

            if ($request['avatar'] === null) {

            $filename = $datos->avatar;

            $updatedatos = $datos->update([

                'nombre' => $request['nombre'],
                'apellido' =>$request['apellido'],
                'cedula' => $request['cedula'],
                'telefono' => $request['telefono'],
                'avatar' => $filename

            ]);
            $user->update([

            'username' => $request['username'],
            'email' => $request['email'],
            'password' => $request['password'],
            'cede_id' => $request['cede'],

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

                    $user->update([

                        'username' => $request['username'],
                        'email' => $request['email'],
                        'password' => $request['password'],
                        'cede_id' => $request['cede'],

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
                               $user->update([

                                    'username' => $request['username'],
                                    'email' => $request['email'],
                                    'password' => $request['password'],
                                    'cede_id' => $request['cede'],

                                ]);
                                      return response()->json(true,201);

                }
        }

    }
        } catch (Exception $e) {
                return response()->json($e,500);
        }

    }

    public function destroy($id)
    {
        try {

             $user = User::find($id);
             $dato = $user->dato;

             $dato->delete();
             return response()->json(true,200);

        } catch (Exception $e) {
               return response()->json($e,500);
        }
    }
}
