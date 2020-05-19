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

}
