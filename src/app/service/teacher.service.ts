import { Injectable } from '@angular/core';
import { Teacher } from '../dto/teachers';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teacher: Teacher[] = [
    {docente: 'Alonso Moncada Mauricio Antonio',  asignatura: 'Elect:prof II sist (G & N de serv.inf)', salon: 'Aula A 203 Dib Tec1'},
    {docente: 'Berbeo Morales Jorge Enrique',  asignatura: 'Ingenieria Economica', salon: 'Aula C 118'},
    {docente: 'Blanco Garrido Fabian', asignatura: 'Seguridad Informatica', salon: 'Aula A 204 Dib Tec2'},
    {docente: 'Goez Theran Cristian Alberto',  asignatura: 'Astronomia y Cosmologia', salon: 'Aula A 110'},
    {docente: 'Mellizo Angulo Oscar Guillermo',  asignatura: 'Ingenieria de Software III', salon: 'Aula Lab. Hardware y Redes 2 L 201-2'},
    {docente: 'Mellizo Angulo Oscar Guillermo',  asignatura: 'Electiva Profesional v (programacion en ambiente web)', salon: 'Aula Sala de Computo C 128'},
    {docente: 'Niño Salamanca Jesus',  asignatura: 'Etica', salon: 'Aula D 113'},
    {docente: 'Plazas Riaño Carlos Andres',  asignatura: 'Energias Renovables y Alternativas', salon: 'Aula C 221'}
  ];

  constructor() { }

  getTeacher() {
    return this.teacher;
  }

  
}
