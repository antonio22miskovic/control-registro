<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Categoria;
use App\Departamento;
use App\Empleado;
use App\Equipo;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Equipo::class, function (Faker $faker) {
    return [

    	'equipo' => $faker->name,
    	'modelo' => $faker->sentence,
    	'marca' => $faker->title,
    	'codigo' => Str::random(6),
    	'descripcion' => $faker->name,
    	'status' => $faker->randomElement(['activo','desincorporado']),
        'departamento_id' => Departamento::all()->random()->id,
        'categoria_id' => Categoria::all()->random()->id,
        'empleado_id' => Empleado::all()->random()->id

    ];
});
