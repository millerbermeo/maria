import axios from 'axios';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


function RegistrarUsuarios() {
  const identificacion = useRef('');
  const telefono = useRef('');
  const nombre = useRef('');
  const email = useRef('');
  const tipo_usuario = useRef('');
  const estado = useRef('');
  const password = useRef('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      identificacion: identificacion.current.value,
      telefono: telefono.current.value,
      nombre: nombre.current.value,
      correo_electronico: email.current.value, // Renombrado a 'correo_electronico'
      tipo_usuario: tipo_usuario.current.value,
      estado: estado.current.value,
      password: password.current.value
    };

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZGVudGlmaWNhY2lvbiI6NDU1NTUsIm5vbWJyZSI6Im1hcmlhIiwidGVsZWZvbm8iOiIyMjEzMjMxMiIsInRpcG9fdXN1YXJpbyI6ImNhdGFkb3IiLCJlc3RhZG8iOiJhY3Rpdm8ifV0sImlhdCI6MTcxMTEzMjQ3OCwiZXhwIjoxNzExMjE4ODc4fQ.AxrtMWa1e2BZXFhuX6tS_agyLIrXiqsErrieFykSohA'; 

    try {
      const response = await axios.post('http://localhost:3000/usuarios/registrar/', { headers: {
        'token': token
    }}, data);
      console.log('Data:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto">
         <Link to="/listar">
        <div className=''>
<button className='bg-blue-400 rounded p-2'>Ir a Listar</button>
        </div>
        </Link>
      <form className="max-w-sm mx-auto mt-8">
        <label className="block mb-2">
          Identificación:
          <input
            type="text"
            name="identificacion"
            ref={identificacion}
            className="form-input mt-1 border block w-full"
          />
        </label>
        <br />
        <label className="block mb-2">
          Teléfono:
          <input
            type="text"
            name="telefono"
            ref={telefono}
            className="form-input mt-1 border block w-full"
          />
        </label>
        <br />
        <label className="block mb-2">
          Nombre:
          <input
            type="text"
            name="nombre"
            ref={nombre}
            className="form-input mt-1 border block w-full"
          />
        </label>
        <br />
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            ref={email}
            className="form-input mt-1 border block w-full"
          />
        </label>
<br />
        <label className="block mb-2">
          Paaword:
          <input
            type="password"
            name="password"
            ref={password}
            className="form-input mt-1 border block w-full"
          />
        </label>
        <br />
        <label className="block mb-2">
          Tipo de Usuario:
          <select name="tipoUsuario" ref={tipo_usuario} className="form-select border mt-1 block w-full">
            <option value="catador">catador</option>
            <option value="caficultor">caficultor</option>
          </select>
        </label>
        <br />
        <label className="block mb-2">
          Estado:
          <select name="estado" ref={estado} className="form-select mt-1 border block w-full">
            <option value="activo">activo</option>
            <option value="inactivo">inactivo</option>
          </select>
        </label>
        <br />
        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default RegistrarUsuarios;
