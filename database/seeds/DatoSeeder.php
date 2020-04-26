<?php

use App\Dato;
use Illuminate\Database\Seeder;

class DatoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 1
        Dato::create([
        	'nombre' => 'Ramon',
        	'apellido' => 'Villalobos',
        	'cedula' => '26119130',
        	'telefono' => '0412-5382012',
        	'avatar' => 'defect.jpg'
        ]);

         // 2
        Dato::create([
        	'nombre' => 'Juan',
        	'apellido' => 'Lara',
        	'cedula' => '12235289',
        	'telefono' => '0412-3762983',
        	'avatar' => 'defect.jpg'
        ]);

         // 3
        Dato::create([
        	'nombre' => 'Miguel',
        	'apellido' => 'Ramirez',
        	'cedula' => '298176142',
        	'telefono' => '0414-1230984',
        	'avatar' => 'defect.jpg'
        ]);

         // 4
        Dato::create([
        	'nombre' => 'Manuel',
        	'apellido' => 'Rangel',
        	'cedula' => '12309364',
        	'telefono' => '0424-7896432',
        	'avatar' => 'defect.jpg'
        ]);

         // 5
        Dato::create([
        	'nombre' => 'Gian',
        	'apellido' => 'Bompensa',
        	'cedula' => '12934765',
        	'telefono' => '0424-6792092',
        	'avatar' => 'defect.jpg'
        ]);

         // 6
        Dato::create([
            'nombre' => 'Jesus',
            'apellido' => 'Soto',
            'cedula' => '192845025',
            'telefono' => '0424-3945012',
            'avatar' => 'defect.jpg'
        ]);

        //EMPLEADOS
         // 7
        Dato::create([

            'nombre' => 'Ricardo',
            'apellido' => 'Montaner',
            'cedula' => '12347098',
            'telefono' => '0424-0128346',
            'avatar' => 'defect.jpg'

        ]);

         // 8
        Dato::create([

            'nombre' => 'Maria',
            'apellido' => 'Piña',
            'cedula' => '102949362',
            'telefono' => '0424-0134281',
            'avatar' => 'defect.jpg'

        ]);

         // 9
        Dato::create([

            'nombre' => 'Antonio',
            'apellido' => 'Miskovic',
            'cedula' => '2891093465',
            'telefono' => '0424-10924373',
            'avatar' => 'defect.jpg'

        ]);

         // 10
        Dato::create([

            'nombre' => 'Milan',
            'apellido' => 'Perez',
            'cedula' => '012937534',
            'telefono' => '0424-09876552',
            'avatar' => 'defect.jpg'

        ]);

         // 11
         Dato::create([

            'nombre' => 'Fernando',
            'apellido' => 'Rivas',
            'cedula' => '123456788',
            'telefono' => '0424-1234567',
            'avatar' => 'defect.jpg'

        ]);

          // 12
          Dato::create([

            'nombre' => 'Milan',
            'apellido' => 'Perez',
            'cedula' => '012937534',
            'telefono' => '0424-09876552',
            'avatar' => 'defect.jpg'

        ]);

           // 13
          Dato::create([

            'nombre' => 'luis',
            'apellido' => 'Tech',
            'cedula' => '091238755',
            'telefono' => '0424-09812346',
            'avatar' => 'defect.jpg'

        ]);

           // 14
          Dato::create([

            'nombre' => 'Luffy',
            'apellido' => 'Monky D',
            'cedula' => '645310283',
            'telefono' => '0424-09024653',
            'avatar' => 'defect.jpg'

        ]);
    }
}
