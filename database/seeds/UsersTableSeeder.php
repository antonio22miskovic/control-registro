<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([

            'username' => 'administrador',
            'email' => 'admin@gmail.com',
            'password' => bcrypt(1234),
            'rol_id' => 1,
            'dato_id' => 1

        ]);
        User::create([

            'username' => 'juan1',
            'email' => 'Juan@gmail.com',
            'password' => bcrypt(1234),
            'cede_id' => 1,
            'rol_id' => 2,
            'dato_id' => 2,

        ]);

        User::create([

            'username' => 'miguel1',
            'email' => 'miguel@gmail.com',
            'password' => bcrypt(1234),
            'cede_id' => 2,
            'rol_id' => 2,
            'dato_id' => 3,

        ]);

        User::create([

            'username' => 'manuel1',
            'email' => 'manuel@gmail.com',
            'password' => bcrypt(1234),
            'cede_id' => 3,
            'rol_id' => 2,
            'dato_id' => 4,

        ]);

        User::create([

            'username' => 'gian1',
            'email' => 'gian@gmail.com',
            'password' => bcrypt(1234),
            'cede_id' => 4,
            'rol_id' => 2,
            'dato_id' => 5,

        ]);

         User::create([

            'username' => 'soto1',
            'email' => 'soto@gmail.com',
            'password' => bcrypt(1234),
            'cede_id' => 5,
            'rol_id' => 2,
            'dato_id' => 6,

        ]);
    }
}
