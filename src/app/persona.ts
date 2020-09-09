export class Persona {
    nombre: String;
    apellido: String;
    cedula: String;
    direccion: String;
    creado: Date;
    constructor(nombre, apellido, cedula, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.direccion = direccion;
        this.creado = new Date(Date.now());
    }
}