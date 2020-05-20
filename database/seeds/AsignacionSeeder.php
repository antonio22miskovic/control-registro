<?php

use App\Asignacion;
use Illuminate\Database\Seeder;

class AsignacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Asignacion::create(['asignacion' => 'secretaria','descripcion' => 'descripcion']);
        Asignacion::create(['asignacion' => 'redator','descripcion' => 'descripcion']);
        Asignacion::create(['asignacion' => 'informatico','descripcion' => 'descripcion']);
        Asignacion::create(['asignacion' => 'contador','descripcion' => 'descripcion']);
    }
}
