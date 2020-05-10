<?php

namespace App;

use App\Categoria;
use App\Departamento;
use App\Empleado;
use Illuminate\Database\Eloquent\Model;

class Equipo extends Model
{
     protected $table ="equipos";

    protected $fillable =[

    	'equipo',
    	'modelo',
    	'marca',
    	'codigo',
    	'descripcion',
    	'status',
        'departamento_id',
        'categoria_id',


    ];

    public function departamento(){
        return $this->belongsTo(Departamento::class);
    }

    public function categoria(){
        return $this->belongsTo(Categoria::class);
    }
    public function empleados(){
         return $this->belongsToMany(Empleado::class);
    }

}
