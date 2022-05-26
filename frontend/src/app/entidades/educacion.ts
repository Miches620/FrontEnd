export class Educacion{
    private id:number;
    private icono:String;
    private titulo:String;
    private institucion:String;
    private anio:number;
    private web:String;


constructor(id:number,icono:String, titulo:String, institucion:String, anio:number, web:String){
    this.id=id;
    this.icono=icono;
    this.titulo=titulo;
    this.institucion=institucion;
    this.anio=anio;
    this.web=web;
}

}