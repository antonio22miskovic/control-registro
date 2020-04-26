<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()

    {

    	$this->call(AsignacionSeeder::class);
    	$this->call(DatoSeeder::class);
    	$this->call(CedeSeeder::class);
    	$this->call(CategoriaSeeder::class);
    	$this->call(RolSeeder::class);
    	$this->call(UsersTableSeeder::class);
    	$this->call(DepartamentoSeeder::class);
    	$this->call(EmpleadoSeeder::class);
    	$this->call(EquipoSeeder::class);

    }
}
