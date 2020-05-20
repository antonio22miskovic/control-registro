<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    protected $table ="rols";

    protected $fillable = [ 'rol' ];

// de uno a muchos con users
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
