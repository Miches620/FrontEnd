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
  datosLogin: any;
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
      this.contraseña = data['login']['contraseña'];
    });
  }
  limpiarFormulario() {
    this.formulario.reset();
  }
  ingresarModoEdicion() {
    this.datosLogin = this.formulario.getRawValue();
    this.loginUsuario = this.datosLogin['ingresoUsuario'];
    if (this.loginUsuario == this.usuario) {
      console.log('Bienvenido');
      this.formulario.reset();
      document.getElementById('cerrarLogin')?.click();
    } else {
      alert('Hay errores man..');
    }
  }
}
