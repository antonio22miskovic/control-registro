<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Planta extends Model
{
   protected $table = 'plantas';

   protected $fillable = [ 'planta','descripcion', 'localidad', 'rif' ];

// de uno a muchos con users
   public function users()
   {
   	 return $this->hasMany(User::class);
   }
}
