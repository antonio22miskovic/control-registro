<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Departamento extends Model
{
    protected $table ='departamentos';

    protected $fillable =[

    	'departamento',
    	'descripcion',
        'planta_id'

    ];

    public function planta(){
    	return $this->belongsTo(Planta::class);
    }

    public function equipos(){
    	return $this->hasMany(Equipo::class);
    }
}
