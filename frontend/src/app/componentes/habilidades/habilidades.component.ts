import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { Habilidades } from 'src/app/entidades/habilidades';
import { ObtenerDatosService } from 'src/app/servicios/obtener-datos.service';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  hBlandas: any;
  hDuras: any;
  habilidades: any;
  idActual: any;
  hab: any;
  boton: boolean = false;
  modoEditor:any
  editarHabilidades: FormGroup;

  constructor(
    private servicio: HabilidadesService,
    private habFormBuilder: FormBuilder,
    private login: ObtenerDatosService
  ) {
    this.editarHabilidades = this.habFormBuilder.group({
      edicionHabilidad: ['', [Validators.required, Validators.minLength(5)]],
      edicionPorcentaje: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.min(25),
          Validators.maxLength(3),
          Validators.max(100),
        ],
      ],
    });
  }

  get habHabilidad() {
    return this.editarHabilidades.get('edicionHabilidad');
  }

  get habPorcentaje() {
    return this.editarHabilidades.get('edicionPorcentaje');
  }

  ngOnInit(): void {
    this.login.iniciarSesion.subscribe(data =>{
      this.modoEditor=true;
    })
    this.login.cerrarSesion.subscribe(data =>{
      this.modoEditor=false;
    })
    this.servicio.obtenerHabilidadesBlandas().subscribe((data) => {
      this.hBlandas = data;
    });

    this.servicio.obtenerHabilidadesDuras().subscribe((data) => {
      this.hDuras = data;
    });
    this.boton = false;
  }

  guardarCambiosHBlandas() {
    if (this.editarHabilidades.valid) {
      let habilidad = this.editarHabilidades.get('edicionHabilidad')?.value;
      let porcentaje = this.editarHabilidades.get('edicionPorcentaje')?.value;

      let editarHabilidades = new Habilidades(
        this.idActual,
        habilidad,
        porcentaje
      );
      this.servicio.editarHBlandas(this.idActual, editarHabilidades).subscribe({
        next: (data) => {
          this.hBlandas[this.hab] = editarHabilidades;
          this.ngOnInit();
          document.getElementById('cerrarEditarHabilidadBlanda')?.click();
          
        },
        error: (error) => {
          alert(
            'Error al intentar actualizar los datos. Por favor intente nuevamente'
          );
        },
      });
    } else {
      alert(
        'Error al actualizar los datos. Verifique que los datos ingresados cumplan con las condiciones de ingreso'
      );
      this.editarHabilidades.markAllAsTouched();
    }
  }

  guardarCambiosHDuras() {
    if (this.editarHabilidades.valid) {
      let habilidad = this.editarHabilidades.get('edicionHabilidad')?.value;
      let porcentaje = this.editarHabilidades.get('edicionPorcentaje')?.value;

      let editarHabilidades = new Habilidades(
        this.idActual,
        habilidad,
        porcentaje
      );
      this.servicio.editarHDuras(this.idActual, editarHabilidades).subscribe({
        next: (data) => {
          this.hDuras[this.hab] = editarHabilidades;
          this.ngOnInit();
          document.getElementById('cerrarEditarHabilidadDura')?.click();
        },
        error: (error) => {
          alert(
            'Error al intentar actualizar los datos. Por favor intente nuevamente'
          );
        },
      });
    } else {
      alert(
        'Error al actualizar los datos. Verifique que los datos ingresados cumplan con las condiciones de ingreso'
      );
      this.editarHabilidades.markAllAsTouched();
    }
  }

  reiniciarForm() {
    this.ngOnInit();
  }

  eliminarHBlandas() {
    this.servicio.borrarHBlandas(this.idActual).subscribe({
      next: (data) => {
        document.getElementById('cerrarBorrarHBlandas')?.click();
        this.idActual = null;
        this.ngOnInit();
      },
      error: (error) => {
        alert(
          'Error al intentar borrar el elemento. Por favor intente nuevamente'
        );
      },
    });
  }

  eliminarHDuras() {
    this.servicio.borrarHDuras(this.idActual).subscribe({
      next: (data) => {
        document.getElementById('cerrarBorrarHDuras')?.click();
        this.idActual = null;
        this.ngOnInit();
      },
      error: (error) => {
        alert(
          'Error al intentar borrar el elemento. Por favor intente nuevamente'
        );
      },
    });
  }

  almacenarItem(hab: Habilidades) {
    this.idActual = hab['id'];
    this.hab = hab;
    this.boton = true;
  }

  editarItem() {
    let habilidad = this.hab['habilidad'];
    let porcentaje = this.hab['porcentaje'];
    this.editarHabilidades.get('edicionHabilidad')?.setValue(habilidad);
    this.editarHabilidades.get('edicionPorcentaje')?.setValue(porcentaje);
  }
}
