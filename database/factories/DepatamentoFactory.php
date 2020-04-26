<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Departamento;
use App\Cede;
use Faker\Generator as Faker;

$factory->define(Departamento::class, function (Faker $faker) {
    return [

        'departamento'=> $faker->name,
    	'descripcion'=> $faker->name,
        'cede_id'=> Cede::all()->random()->id

    ];

});
