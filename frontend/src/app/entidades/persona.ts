export class Persona {
    private id:number;
    private nombre:String;
    private edad:number;
    private titulo:String;
    private img:String;

    constructor(id:number, nombre:String,edad:number, titulo:String, img:String) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.titulo = titulo;
        this.img = img;
    }
}