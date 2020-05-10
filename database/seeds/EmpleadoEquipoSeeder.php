<?php

use Illuminate\Database\Seeder;

class EmpleadoEquipoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(App\EmpleadoEquipo::class,20)->create();
    }
}
