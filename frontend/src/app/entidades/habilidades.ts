export class Habilidades{
    private habilidad:String;
    private porcentaje:Int8Array;
    private posicion:Int8Array;

constructor(habilidad:String, porcentaje:Int8Array, posicion:Int8Array){
    this.habilidad=habilidad;
    this.porcentaje=porcentaje;
    this.posicion=posicion;
}

}