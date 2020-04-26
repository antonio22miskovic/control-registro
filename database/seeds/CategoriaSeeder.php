<?php

use App\Categoria;
use Illuminate\Database\Seeder;

class CategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         Categoria::create([

        		'categoria' => 'telefono',
				'descripcion' => 'telefono de la empresa'

        	]);

        	Categoria::create([

        		'categoria' => 'computadora',
				'descripcion' => 'computadoras de uso administrativo'

        	]);

        	Categoria::create([

        		'categoria' => 'monitores',
				'descripcion' => 'monitores de vigilancia'

        	]);

        	Categoria::create([

        		'categoria' => 'camaras',
				'descripcion' => 'camaras de seguridad'

        	]);
    }
}
