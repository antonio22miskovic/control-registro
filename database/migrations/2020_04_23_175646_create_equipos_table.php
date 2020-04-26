<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEquiposTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipos', function (Blueprint $table) {
            $table->id();
            $table->string('equipo');
            $table->string('modelo');
            $table->string('marca');
            $table->string('codigo')->nullable();
            $table->string('descripcion');
            $table->string('status');

            $table->foreignId('categoria_id')
                  ->nullable()
                  ->constrained()
                  ->onDelete('set null');

            $table->foreignId('departamento_id')
                  ->nullable()
                  ->constrained()
                  ->onDelete('set null');
                  $table->foreignId('empleado_id')
                  ->nullable()
                  ->constrained()
                  ->onDelete('set null');
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
        Schema::dropIfExists('equipos');
    }
}
