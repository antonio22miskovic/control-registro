<?php

namespace App;

use App\Empleado;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Dato extends Model
{
   protected $table = 'datos';

   protected $fillable = ['nombre','apellido','cedula','telefono'];

   public function user()
   {
   		 return $this->belongsTo(User::class);
   }

   public function empleado()
   {
   		 return $this->belongsTo(Empleado::class);
   }
}
