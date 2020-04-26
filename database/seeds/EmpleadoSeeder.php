<?php

use App\Asignacion;
use App\Departamento;
use App\Empleado;
use Illuminate\Database\Seeder;

class EmpleadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Empleado::create([

        	'dato_id' => 7,
        	'asignacion_id' => Asignacion::all()->random()->id,
        	'departamento_id' => Departamento::all()->random()->id

        ]);
        Empleado::create([

        	'dato_id' => 8 ,
        	'asignacion_id' => Asignacion::all()->random()->id ,
        	'departamento_id' => Departamento::all()->random()->id

        ]);
        Empleado::create([

        	'dato_id' => 9,
        	'asignacion_id' => Asignacion::all()->random()->id,
        	'departamento_id' => Departamento::all()->random()->id

        ]);
        Empleado::create([

        	'dato_id' => 10,
        	'asignacion_id' => Asignacion::all()->random()->id,
        	'departamento_id' => Departamento::all()->random()->id

        ]);
        Empleado::create([

        	'dato_id' => 11,
        	'asignacion_id' => Asignacion::all()->random()->id,
        	'departamento_id' => Departamento::all()->random()->id

        ]);
        Empleado::create([

        	'dato_id' => 12,
        	'asignacion_id' => Asignacion::all()->random()->id ,
        	'departamento_id' => Departamento::all()->random()->id

        ]);
        Empleado::create([

        	'dato_id' => 13,
        	'asignacion_id' => Asignacion::all()->random()->id ,
        	'departamento_id' => Departamento::all()->random()->id

        ]);
        Empleado::create([

        	'dato_id' => 14,
        	'asignacion_id' => Asignacion::all()->random()->id ,
        	'departamento_id' => Departamento::all()->random()->id

        ]);
    }
}
