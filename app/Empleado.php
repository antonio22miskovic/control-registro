<?php

namespace App;

use App\Asignacion;
use App\Dato;
use App\Departamento;
use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    protected $table = 'empleados';

    protected $fillable =['dato_id','asignacion_id','departamento_id'];

    public function dato()
    {
    	return $this->belongsTo(Dato::class);
    }

    public function departamento()
    {
    	return $this->belongsTo(Departamento::class);
    }

    public function asignacion()
    {
    	return $this->belongsTo(Asignacion::class);
    }

     public function equipos()
    {
         return $this->belongsToMany(Equipo::class);
    }
}
