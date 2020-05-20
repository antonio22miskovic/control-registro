<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {

            $table->id();
<<<<<<< HEAD:database/migrations/2014_10_12_000000_create_users_table.php
            $table->string('name');
=======
>>>>>>> ef7883cc869618e387877d65499ab38b00317941:database/migrations/2020_04_23_174852_create_users_table.php
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();

            $table->foreignId('rol_id')
                    ->nullable()
                    ->constrained()
                    ->onDelete('cascade');

            $table->foreignId('cede_id')
                    ->nullable()
                    ->constrained()
                    ->onDelete('cascade');

            $table->foreignId('dato_id')
                    ->nullable()
                    ->constrained()
                    ->onDelete('cascade')->unique();

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
