import React from 'react'

export default function MyComponent() {

  const name = "Innes";
  const repository  = "https://github.com/inesmariao/component-practice.git"


  const student = {
    name: "Richard",
    lastmane: "Ramirez",
    mobile: "3126325340",
    github: "https://github.com/RDRACHIR"
  }

  return (
    <div><hr />
    <p>este es mi Primer Componete</p>
    <h2>Temas de React</h2>
    <ul>
      <li>Componentes</li>
      <li>Eventos</li>
      <li>Estados - Hooks</li>
      <li>Comunicación</li>
    </ul>
    <hr />
    <h2>Datos del Docente</h2>
    <p>Nombre: {name}</p>
    <p>Repositorio: {repository}</p>
    <h3>Datos del Estudiante</h3>
    <p>Nombre: {student.name} {student.lastmane}</p>
    <p>Telefono: {student.mobile}</p>
    <p>Repositorio: {student.github}</p>
    </div>
  )
}
