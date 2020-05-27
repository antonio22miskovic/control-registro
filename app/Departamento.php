<?php

namespace App;

use App\Cede;
use App\Empleado;
use Illuminate\Database\Eloquent\Model;
class Departamento extends Model
{
    protected $table ='departamentos';

    protected $fillable =[

    	'departamento',
    	'descripcion',
        'cede_id'

    ];

    public function cede(){
    	return $this->belongsTo(Cede::class);
    }

    public function equipos(){
    	return $this->hasMany(Equipo::class);
    }
    public function empleados(){
        return $this->hasMany(Empleado::class);
    }

// Scope
public function scopeDepartamento($query, $departamento)
{
   if($departamento){
     return $query->where('departamento', 'LIKE', "%$departamento%");
  }

}
public function scopeDescripcion($query, $descripcion)
{
   if($descripcion){
     return $query->where('descripcion', 'LIKE', "%$descripcion%");
  }
}
}
