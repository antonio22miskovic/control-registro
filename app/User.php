<?php
namespace App;

use App\Dato;
use App\Cede;
use App\Rol;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements  JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'email',
        'password',
        'rol_id',
        'cede_id',
        'dato_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

     //funciones para jwt
    public  function  getJWTIdentifier() {
        return  $this->getKey();
    }

    public  function  getJWTCustomClaims() {
        return [];
    }
    // fin funciones para jwt

     // de uno a uno con plantas de procesamiento
    public function cede(){

      return $this->belongsTo(Cede::class);

    }

    public function rol(){

      return $this->belongsTo(Rol::class);

    }

    public function dato(){

      return $this->belongsTo(Dato::class);

    }
}
