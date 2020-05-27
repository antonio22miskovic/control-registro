<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Asignacion extends Model
{
    protected $table ='asignacions';

    protected $fillable = ['asignacion','descripcion'];

    public function empleados()
    {
    	return $this->hasMany(Empleado::class);
    }


// Scope
public function scopeAsignacion($query, $asignacion)
{
   if($asignacion){
     return $query->where('asignacion', 'LIKE', "%$asignacion%");
  }

}
public function scopeDescripcion($query, $descripcion)
{
   if($descripcion){
     return $query->where('descripcion', 'LIKE', "%$descripcion%");
  }
}

}
