<?php

namespace App\Http\Controllers;

use App\Asignacion;
use Illuminate\Http\Request;

class AsignacionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
  public function index(Request $request)
    {
        $asignacion = Asignacion::orderBy('id', 'desc')->paginate(5);

        return [

            'paginate' => [

                'total' => $asignacion->total(),
                'current_page' => $asignacion->currentPage(),
                'per_page' => $asignacion->perPage(),
                'last_page' => $asignacion->lastPage(),
                'from' => $asignacion->firstItem(),
                'to' => $asignacion->lastPage(),

            ],

           'asignacion' => $asignacion

        ];
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       try {

            Asignacion::create($request->all());
            return response()->json(true,201);

       } catch (Exception $e) {
           return response()->json($e,500);
       }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }


    public function update(Request $request, $id)
    {
       try {
            $asignacion = Asignacion::find($id);
            $asignacion->update($request->all());
            return response()->json(true,201);
       } catch (Exception $e) {
           return response()->json($e,500);
       }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $asignacion = Asignacion::find($id);
            $asignacion->delete();
            return response()->json(true,201);
       } catch (Exception $e) {
           return response()->json($e,500);
       }
    }
}
