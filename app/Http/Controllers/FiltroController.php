<?php

namespace App\Http\Controllers;

use App\Asignacion;
use App\Categoria;
use App\Dato;
use App\Departamento;
use App\Empleado;
use App\Equipo;
use Illuminate\Http\Request;

class FiltroController extends Controller
{
	protected $user;
    protected $cede;

    public function __construct()
    {
    	$this->user = auth('api')->user();
    	$this->cede = $this->user->cede;
    }
   public function FiltroEmpleados($dato)
   {
   			 $empleado = Dato::orderBy('id', 'desc')
   	 		->nombre($dato)
   	 		->paginate(5);
   	 		$a = $empleado->items();
   	 		if ($a !== []) {
   	 			$arraydatos = [];
   	 			foreach ($empleado as $p) {
        			$personal = $p->empleado;
        			$asignacion = $personal->asignacion;
        			$departamento = $personal->departamento;

        			if ($this->cede->id === $departamento['cede_id']) {

        			 $array = ['id_empleado' => $personal['id'],
        					   'nombre' => $p['nombre'],
        					   'apellido' => $p['apellido'],
        					   'cedula' => $p['cedula'],
        					   'telefono' => $p['telefono'],
        					   'avatar' => $p['avatar'],
        					   'asignacion' => $asignacion['asignacion'],
        					   'asignacion_id' => $asignacion['id'],
        					   'departamento' => $departamento['departamento'],
        					   'departamento_id' => $departamento['id']
        					];

        			$arraydatos[] = $array;

        			}

   	 			}
   	 			return [

            'paginate' => [

                'total' => $empleado->total(),
                'current_page' => $empleado->currentPage(),
                'per_page' => $empleado->perPage(),
                'last_page' => $empleado->lastPage(),
                'from' => $empleado->firstItem(),
                'to' => $empleado->lastPage(),

            ],

           'empleado' => $arraydatos

        ];
    }

   	 			$empleado1 = Dato::orderBy('id', 'desc')
   	 			->apellido($dato)
   	 			->paginate(5);

   	 			$b = $empleado1->items();
   	 		if ($b !== []) {
   	 			$arraydatos1 = [];
   	 			foreach ($empleado1 as $p) {
   	 				$personal = $p->empleado;
        			$asignacion = $personal->asignacion;
        			$departamento = $personal->departamento;
        				if ($this->cede->id === $departamento['cede_id']) {

        				$array = [ 'id_empleado' => $personal['id'],
        						'nombre' => $p['nombre'],
        					   'apellido' => $p['apellido'],
        					   'cedula' => $p['cedula'],
        					   'telefono' => $p['telefono'],
        					   'avatar' => $p['avatar'],
        					   'asignacion' => $asignacion['asignacion'],
        					   'asignacion_id' => $asignacion['id'],
        					   'departamento' => $departamento['departamento'],
        					   'departamento_id' => $departamento['id']
        					];

        					$arraydatos1[] = $array;
        		       }
        		}
   	 			return [

            'paginate' => [

                'total' => $empleado1->total(),
                'current_page' => $empleado1->currentPage(),
                'per_page' => $empleado1->perPage(),
                'last_page' => $empleado1->lastPage(),
                'from' => $empleado1->firstItem(),
                'to' => $empleado1->lastPage(),

            ],

           'empleado' => $arraydatos1

        ];
    }

   	 			$empleado2 = Dato::orderBy('id', 'desc')
   	 			->cedula($dato)
   	 			->paginate(5);
   	 			$c = $empleado2->items();
   	 	if ($c !== []) {
   	 			$arraydatos2 = [];
   	 			foreach ($empleado2 as $p) {
   	 			$personal = $p->empleado;
        			$asignacion = $personal->asignacion;
        			$departamento = $personal->departamento;
        			if ($this->cede->id === $departamento['cede_id']) {

        				$array = [ 	'id_empleado' => $personal['id'],
        						'nombre' => $p['nombre'],
        					   'apellido' => $p['apellido'],
        					   'cedula' => $p['cedula'],
        					   'telefono' => $p['telefono'],
        					   'avatar' => $p['avatar'],
        					   'asignacion' => $asignacion['asignacion'],
        					   'asignacion_id' => $asignacion['id'],
        					   'departamento' => $departamento['departamento'],
        					   'departamento_id' => $departamento['id']
        					];

        					$arraydatos2[] = $array;
        		       }
        		}
   	 			return [

            'paginate' => [

                'total' => $empleado2->total(),
                'current_page' => $empleado2->currentPage(),
                'per_page' => $empleado2->perPage(),
                'last_page' => $empleado2->lastPage(),
                'from' => $empleado2->firstItem(),
                'to' => $empleado2->lastPage(),

            ],

           'empleado' => $arraydatos2

        ];

  }

  	$empleado3 = Dato::orderBy('id', 'desc')
   	 			->telefono($dato)
   	 			->paginate(5);
   	 			$arraydatos3 = [];
   	 			foreach ($empleado3 as $p) {
   	 			$personal = $p->empleado;
        			$asignacion = $personal->asignacion;
        			$departamento = $personal->departamento;
        		if ($this->cede->id === $departamento['cede_id']) {

        				$array = [ 	'id_empleado' => $personal['id'],
        						'nombre' => $p['nombre'],
        					   'apellido' => $p['apellido'],
        					   'cedula' => $p['cedula'],
        					   'telefono' => $p['telefono'],
        					   'avatar' => $p['avatar'],
        					   'asignacion' => $asignacion['asignacion'],
        					   'asignacion_id' => $asignacion['id'],
        					   'departamento' => $departamento['departamento'],
        					   'departamento_id' => $departamento['id']
        					];

        					$arraydatos3[] = $array;
        		       }
        		}
   	 			return [

            'paginate' => [

                'total' => $empleado3->total(),
                'current_page' => $empleado3->currentPage(),
                'per_page' => $empleado3->perPage(),
                'last_page' => $empleado3->lastPage(),
                'from' => $empleado3->firstItem(),
                'to' => $empleado3->lastPage(),

            ],

           'empleado' => $arraydatos3
        ];

   }

   public function filtroEquipos($status,$dato)
   {
   		$equipo = Equipo::orderBy('id', 'desc')
   		 ->where('status',$status)
   	 	->equipo($dato)
   	 	->paginate(5);

   	 		$a = $equipo->items();
   	 		$array = [];
   	 		if ($a !== []) {
   	 			foreach ($equipo as $data) {
   	 				$departamento = $data->departamento;
   	 				$categoria = $data->categoria;
   	 				if ($departamento->cede_id === $this->cede->id) {
   	 						$push =[
   	 							'id' => $data['id'],
   	 							'equipo' => $data['equipo'],
   	 							'modelo' => $data['modelo'],
   	 							'marca' => $data['marca'],
   	 							'codigo' => $data['codigo'],
   	 							'descripcion' => $data['descripcion'],
   	 							'status' => $data['status'],
   	 							'categoria' => $categoria['categoria'],
   	 							'categoria_id' => $categoria['id'],
   	 							'departamento_id' => $departamento['id'],
   	 						];
   	 						$array[] = $push;
   	 				}// fin if
   	 			}//fin foreach

   	 				return [

            'paginate' => [

                'total' => $equipo->total(),
                'current_page' => $equipo->currentPage(),
                'per_page' => $equipo->perPage(),
                'last_page' => $equipo->lastPage(),
                'from' => $equipo->firstItem(),
                'to' => $equipo->lastPage(),

            ],

           'equipo' => $array

        ];


   	 }//fin del primero

   	    		$equipo = Equipo::orderBy('id', 'desc')
   		 ->where('status',$status)
   	 	->modelo($dato)
   	 	->paginate(5);

   	 		$a = $equipo->items();
   	 		$array = [];
   	 		if ($a !== []) {
   	 			foreach ($equipo as $data) {
   	 				$departamento = $data->departamento;
   	 				$categoria = $data->categoria;
   	 				if ($departamento->cede_id === $this->cede->id) {
   	 						$push =[
   	 							'id' => $data['id'],
   	 							'equipo' => $data['equipo'],
   	 							'modelo' => $data['modelo'],
   	 							'marca' => $data['marca'],
   	 							'codigo' => $data['codigo'],
   	 							'descripcion' => $data['descripcion'],
   	 							'status' => $data['status'],
   	 							'categoria' => $categoria['categoria'],
   	 							'categoria_id' => $categoria['id'],
   	 							'departamento_id' => $departamento['id'],
   	 						];
   	 						$array[] = $push;
   	 				}// fin if
   	 			}//fin foreach

   	 				return [

            'paginate' => [

                'total' => $equipo->total(),
                'current_page' => $equipo->currentPage(),
                'per_page' => $equipo->perPage(),
                'last_page' => $equipo->lastPage(),
                'from' => $equipo->firstItem(),
                'to' => $equipo->lastPage(),

            ],

           'equipo' => $array

        ];


   	 }//fin del primero

   	    		$equipo = Equipo::orderBy('id', 'desc')
   		 ->where('status',$status)
   	 	->marca($dato)
   	 	->paginate(5);

   	 		$a = $equipo->items();
   	 		$array = [];
   	 		if ($a !== []) {
   	 			foreach ($equipo as $data) {
   	 				$departamento = $data->departamento;
   	 				$categoria = $data->categoria;
   	 				if ($departamento->cede_id === $this->cede->id) {
   	 						$push =[
   	 							'id' => $data['id'],
   	 							'equipo' => $data['equipo'],
   	 							'modelo' => $data['modelo'],
   	 							'marca' => $data['marca'],
   	 							'codigo' => $data['codigo'],
   	 							'descripcion' => $data['descripcion'],
   	 							'status' => $data['status'],
   	 							'categoria' => $categoria['categoria'],
   	 							'categoria_id' => $categoria['id'],
   	 							'departamento_id' => $departamento['id'],
   	 						];
   	 						$array[] = $push;
   	 				}// fin if
   	 			}//fin foreach

   	 				return [

            'paginate' => [

                'total' => $equipo->total(),
                'current_page' => $equipo->currentPage(),
                'per_page' => $equipo->perPage(),
                'last_page' => $equipo->lastPage(),
                'from' => $equipo->firstItem(),
                'to' => $equipo->lastPage(),

            ],

           'equipo' => $array

        ];


   	 }//fin del primero

   	    		$equipo = Equipo::orderBy('id', 'desc')
   		 ->where('status',$status)
   	 	->codigo($dato)
   	 	->paginate(5);

   	 		$a = $equipo->items();
   	 		$array = [];
   	 		if ($a !== []) {
   	 			foreach ($equipo as $data) {
   	 				$departamento = $data->departamento;
   	 				$categoria = $data->categoria;
   	 				if ($departamento->cede_id === $this->cede->id) {
   	 						$push =[
   	 							'id' => $data['id'],
   	 							'equipo' => $data['equipo'],
   	 							'modelo' => $data['modelo'],
   	 							'marca' => $data['marca'],
   	 							'codigo' => $data['codigo'],
   	 							'descripcion' => $data['descripcion'],
   	 							'status' => $data['status'],
   	 							'categoria' => $categoria['categoria'],
   	 							'categoria_id' => $categoria['id'],
   	 							'departamento_id' => $departamento['id'],
   	 						];
   	 						$array[] = $push;
   	 				}// fin if
   	 			}//fin foreach

   	 				return [

            'paginate' => [

                'total' => $equipo->total(),
                'current_page' => $equipo->currentPage(),
                'per_page' => $equipo->perPage(),
                'last_page' => $equipo->lastPage(),
                'from' => $equipo->firstItem(),
                'to' => $equipo->lastPage(),

            ],

           'equipo' => $array

        ];


   	 }//fin del primero

   	    $equipo = Equipo::orderBy('id', 'desc')
   		 ->where('status',$status)
   	 	->descripcion($dato)
   	 	->paginate(5);

   	 		$a = $equipo->items();
   	 		$array = [];
   	 		if ($a !== []) {
   	 			foreach ($equipo as $data) {
   	 				$departamento = $data->departamento;
   	 				$categoria = $data->categoria;
   	 				if ($departamento->cede_id === $this->cede->id) {
   	 						$push =[
   	 							'id' => $data['id'],
   	 							'equipo' => $data['equipo'],
   	 							'modelo' => $data['modelo'],
   	 							'marca' => $data['marca'],
   	 							'codigo' => $data['codigo'],
   	 							'descripcion' => $data['descripcion'],
   	 							'status' => $data['status'],
   	 							'categoria' => $categoria['categoria'],
   	 							'categoria_id' => $categoria['id'],
   	 							'departamento_id' => $departamento['id'],
   	 						];
   	 						$array[] = $push;
   	 				}// fin if
   	 			}//fin foreach

   	 				return [

            'paginate' => [

                'total' => $equipo->total(),
                'current_page' => $equipo->currentPage(),
                'per_page' => $equipo->perPage(),
                'last_page' => $equipo->lastPage(),
                'from' => $equipo->firstItem(),
                'to' => $equipo->lastPage(),

            ],

           'equipo' => $array

        ];


   	 }//fin del primero

 }

 public function filtarCategoria($dato)
 {
 	$categoria =  Categoria::orderBy('id', 'desc')
   	 	->categoria($dato)
   	 	->paginate(5);

   	 	$a = $categoria->items();
   	 		$array = [];
   	 		if ($a !== []) {
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
   	 		}else{
   	 		$categoria =  Categoria::orderBy('id', 'desc')
   	 	->descripcion($dato)
   	 	->paginate(5);

   	 	$a = $categoria->items();
   	 		$array = [];
   	 		if ($a !== []) {
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

 }
}

public function filtarDepartamento($dato)
 {
 	$departamento = Departamento::orderBy('id', 'desc')
   	 	->departamento($dato)
   	 	->paginate(5);

   	 	$a = $departamento->items();
   	 		$array = [];
   	 		if ($a !== []) {
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
   	 		}else{
   	 		$departamento = Departamento::orderBy('id', 'desc')
   	 	->descripcion($dato)
   	 	->paginate(5);

   	 	$a = $departamento->items();
   	 		$array = [];
   	 		if ($a !== []) {
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

 }
}

public function filtarAsignacion($dato)
 {
 	$asignacion = Asignacion::orderBy('id', 'desc')
   	 	->asignacion($dato)
   	 	->paginate(5);

   	 	$a = $asignacion->items();
   	 		$array = [];
   	 		if ($a !== []) {
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
   	 		}else{
   	 		$asignacion = Asignacion::orderBy('id', 'desc')
   	 	->descripcion($dato)
   	 	->paginate(5);

   	 	$a = $asignacion->items();
   	 		$array = [];
   	 		if ($a !== []) {
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

 }
}

}
