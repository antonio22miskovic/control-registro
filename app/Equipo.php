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

    // Scope
public function scopeEquipo($query, $equipo)
{
   if($equipo){
     return $query->where('equipo', 'LIKE', "%$equipo%");
  }

}
public function scopeModelo($query, $modelo)
{
   if($modelo){
     return $query->where('modelo', 'LIKE', "%$modelo%");
  }

}
public function scopeMarca($query, $marca)
{
   if($marca){
     return $query->where('marca', 'LIKE', "%$marca%");
  }
}
public function scopeCodigo($query, $codigo)
{
   if($codigo){
     return $query->where('codigo', 'LIKE', "%$codigo%");
  }

}

public function scopeDescripcion($query, $descripcion)
{
   if($descripcion){
     return $query->where('descripcion', 'LIKE', "%$descripcion%");
  }

}

}
