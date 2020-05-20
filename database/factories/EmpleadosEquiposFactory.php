<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Empleado;
use App\EmpleadoEquipo;
use App\Equipo;
use Faker\Generator as Faker;

$factory->define(EmpleadoEquipo::class, function (Faker $faker) {
    return [
       'empleado_id' => Empleado::all()->random()->id,
       'equipo_id' => Equipo::all()->random()->id,
    ];
});
