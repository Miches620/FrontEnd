import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/entidades/login';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  usuario: any;
  contraseña: any;
  datosLogin: any;
  estado:any;
  formulario: FormGroup;
  constructor(
    private servicio: ObtenerDatosService, private servicio2:EducacionService,
    private loginFormBuilder: FormBuilder
  ) {
    this.formulario = this.loginFormBuilder.group({
      ingresoUsuario: ['', [Validators.required]],
      ingresoContraseña: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.servicio.obtenerLogin().subscribe((data) => {
      this.usuario = data['usuario'];
      this.contraseña = data['contraseña'];
      this.estado = data['estado'];
  })
}

limpiarFormulario() {
  this.formulario.reset();
}
  ingresarModoEdicion() {
    this.datosLogin = this.formulario.getRawValue();
    let usuarioForm = this.datosLogin['ingresoUsuario'];
    let contraseñaForm = this.datosLogin['ingresoContraseña'];
  
    if (usuarioForm == this.usuario && contraseñaForm == this.contraseña) {
      this.estado=true;
      let nuevoEstado = new Login(usuarioForm,contraseñaForm,this.estado)
      console.log('Bienvenido');
      this.servicio.editarLogin(nuevoEstado).subscribe({
        next: (data) => {
          localStorage.setItem('usuarioAutentificado','true')
          this.formulario.reset();
          document.getElementById('cerrarLogin')?.click()
          console.log(localStorage.getItem('usuarioAutentificado'))
        },
        error: (error) => {
          alert(
            'Error al intentar actualizar los datos. Por favor intente nuevamente'
          );
        },
      });
    } else {
      alert('Hay errores man..');
    }
  }
}
