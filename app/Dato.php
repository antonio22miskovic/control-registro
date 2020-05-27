<?php

namespace App;

use App\Empleado;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Dato extends Model
{
   protected $table = 'datos';

   protected $fillable = ['nombre','apellido','cedula','telefono','avatar'];

   public function user()
   {
   		 return $this->hasOne(User::class);
   }

   public function empleado()
   {
   		 return $this->hasOne(Empleado::class);
   }
// Scope
public function scopeNombre($query, $nombre)
{
   if($nombre){
     return $query->where('nombre', 'LIKE', "%$nombre%");
  }

}
public function scopeApellido($query, $apellido)
{
   if($apellido){
     return $query->where('apellido', 'LIKE', "%$apellido%");
  }

}
public function scopeCedula($query, $cedula)
{
   if($cedula){
     return $query->where('cedula', 'LIKE', "%$cedula%");
  }
}
public function scopeTelefono($query, $telefono)
{
   if($telefono){
     return $query->where('telefono', 'LIKE', "%$telefono%");
  }

}
}