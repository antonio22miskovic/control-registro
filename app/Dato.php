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
}
