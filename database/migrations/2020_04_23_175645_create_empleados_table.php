<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpleadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empleados', function (Blueprint $table) {
            $table->id();
            $table->foreignId('dato_id')
                  ->nullable()
                  ->constrained()
                  ->onDelete('set null');
            $table->foreignId('asignacion_id')
                  ->nullable()
                  ->constrained()
                  ->onDelete('set null');
            $table->foreignId('departamento_id')
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
        Schema::dropIfExists('empleados');
    }
}
