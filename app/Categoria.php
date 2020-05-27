<?php

namespace App;

use App\Equipo;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $table = "categorias";

	protected $fillable = [

		'categoria',
		'descripcion'

	];

	public function equipos(){

		return $this->hasMany(Equipo::class);
	}

// Scope
public function scopeCategoria($query, $categoria)
{
   if($categoria){
     return $query->where('categoria', 'LIKE', "%$categoria%");
  }

}
public function scopeDescripcion($query, $descripcion)
{
   if($descripcion){
     return $query->where('descripcion', 'LIKE', "%$descripcion%");
  }
}
}

