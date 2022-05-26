export class Proyectos{
    private id:number;
    private img:String;
    private proyecto:String;
    private descripcion:String;
   

    constructor(id:number, img:String, proyecto:String,descripcion:String){
        this.id=id;
        this.img=img;
        this.proyecto=proyecto;
        this.descripcion=descripcion
    }

}