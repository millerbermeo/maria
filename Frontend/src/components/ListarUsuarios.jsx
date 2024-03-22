import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

function ListarUsuarios() {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZGVudGlmaWNhY2lvbiI6NDU1NTUsIm5vbWJyZSI6Im1hcmlhIiwidGVsZWZvbm8iOiIyMjEzMjMxMiIsInRpcG9fdXN1YXJpbyI6ImNhdGFkb3IiLCJlc3RhZG8iOiJhY3Rpdm8ifV0sImlhdCI6MTcxMTEzMjQ3OCwiZXhwIjoxNzExMjE4ODc4fQ.AxrtMWa1e2BZXFhuX6tS_agyLIrXiqsErrieFykSohA'; 

        try {
            const response = await axios.get('http://localhost:3000/usuarios/listar/', {
                headers: {
                    'token': token
                }
            });

            setData(response.data)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
fetchData()
    },[])

    return (
        <div>
            {data.map((dato, index) => (
                <div key={index}>
                    <p>Identificación: {dato.identificacion}</p>
                    <p>Teléfono: {dato.telefono}</p>
                    <p>Nombre: {dato.nombre}</p>
                    <p>Email: {dato.email}</p>
                    <p>Tipo de Usuario: {dato.tipo_usuario}</p>
                    <p>Estado: {dato.estado}</p>
                </div>
            ))}
        </div>
    )
}

export default ListarUsuarios
