<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Dato;
use Faker\Generator as Faker;

$factory->define(Dato::class, function (Faker $faker) {
    return [

        	'nombre' => $faker->name,
        	'apellido' => $faker->lastName,
        	'cedula' => $faker->ean8,
        	'telefono' => $faker->e164PhoneNumber,
        	'avatar' => 'defect.jpg'
    ];
});
