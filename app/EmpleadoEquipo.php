<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmpleadoEquipo extends Model
{
    protected $table ="empleado_equipo";

    protected $fillable = ['empleado_id','equipo_id'];
}
