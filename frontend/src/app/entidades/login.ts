export class Login{
    private usuario:String;
    private contraseña:Int8Array;
    private estado:boolean

constructor(usuario:String, contraseña:Int8Array, estado:boolean){
    this.usuario=usuario;
    this.contraseña=contraseña;
    this.estado=estado;
}

}