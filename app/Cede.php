<?php

namespace App;

use App\Departamento;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Cede extends Model
{
    protected $table = 'cedes';

   protected $fillable = [ 'cede','descripcion', 'localidad', 'rif' ];

// de uno a muchos con users
   public function users()
   {
   	 return $this->hasMany(User::class);
   }
   public function departamentos(){

        return $this->hasMany(Departamento::class);
    }
}
