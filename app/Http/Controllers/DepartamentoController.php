<?php

namespace App\Http\Controllers;

use App\Departamento;
use Illuminate\Http\Request;

class DepartamentoController extends Controller
{
    protected $user;
    protected $cede;
    function __construct()
    {
        $this->user = auth('api')->user();
    }
    public function index(Request $request)
    {
        $departamento = Departamento::orderBy('id', 'desc')->where('cede_id',$this->user->cede_id)->paginate(5);

        return [

            'paginate' => [

                'total' => $departamento->total(),
                'current_page' => $departamento->currentPage(),
                'per_page' => $departamento->perPage(),
                'last_page' => $departamento->lastPage(),
                'from' => $departamento->firstItem(),
                'to' => $departamento->lastPage(),

            ],

           'departamento' => $departamento

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

            Departamento::create([
                'departamento' => $request['departamento'],
                'descripcion' => $request['descripcion'],
                'cede_id' => $this->user->cede_id
            ]);
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
            $departamento = Departamento::find($id);
            $departamento->update($request->all());
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
            $departamento = Departamento::find($id);
            $departamento->delete();
            return response()->json(true,201);
       } catch (Exception $e) {
           return response()->json($e,500);
       }
    }
}
