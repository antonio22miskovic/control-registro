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
        Asignacion::create(['asignacion' => 'secretaria']);
        Asignacion::create(['asignacion' => 'redator']);
        Asignacion::create(['asignacion' => 'informatico']);
        Asignacion::create(['asignacion' => 'contador']);
    }
}
