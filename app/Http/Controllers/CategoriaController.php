<?php

namespace App\Http\Controllers;

use App\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $categoria = Categoria::orderBy('id', 'desc')->paginate(5);


        return [

            'paginate' => [

                'total' => $categoria->total(),
                'current_page' => $categoria->currentPage(),
                'per_page' => $categoria->perPage(),
                'last_page' => $categoria->lastPage(),
                'from' => $categoria->firstItem(),
                'to' => $categoria->lastPage(),

            ],

           'categoria' => $categoria

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

            Categoria::create($request->all());
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
            $categoria = Categoria::find($id);
            $categoria->update($request->all());
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
            $categoria = Categoria::find($id);
            $categoria->delete();
            return response()->json(true,201);
       } catch (Exception $e) {
           return response()->json($e,500);
       }
    }
}
