<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DatosRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

            'nombre' => 'required|string',
            'apellido' => 'required|string',
            'cedula' => 'required|unique:datos',
            'telefono' => 'required',
            'asignacion' => 'required|integer',
            'departamento' => 'required|integer',

        ];
    }
    public function messages()
    {
        return [
            'cedula.unique' => 'la cedula ya se encuentra en uso',
        ];
    }

}
