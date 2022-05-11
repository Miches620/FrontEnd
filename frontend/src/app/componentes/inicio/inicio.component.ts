import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  usuario: any;
  contraseña: any;
  loginUsuario: any;
  loginContraseña: any;
  formulario: FormGroup;
  constructor(
    private servicio: ObtenerDatosService,
    private loginFormBuilder: FormBuilder
  ) {
    this.formulario = this.loginFormBuilder.group({
      ingresoUsuario: ['', [Validators.required]],
      ingresoContraseña: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.servicio.obtenerLogin().subscribe((data) => {
      this.usuario = data['login']['usuario'];
      console.log(this.usuario);
      this.contraseña = data['login']['contraseña'];
      console.log(this.contraseña);
    });
  }
  limpiarFormulario() {
    this.formulario.reset();
  }
  ingresarModoEdicion() {
    this.loginUsuario = this.formulario.get("ingresoUsuario")?.value;
    this.loginContraseña = this.formulario.get("ingresoContraseña")?.value;
    if (this.loginUsuario == this.usuario) {
     /* usuarioAutentificado=true; hacer funcionar esto para descubrir u ocultar los botones de edicion*/
      console.log('Bienvenido');
      this.formulario.reset();
      document.getElementById('cerrarLogin')?.click();
    } else {
      alert('Hay errores man..');
    }
  }
}
