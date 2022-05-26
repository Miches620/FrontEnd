package com.miPortfolio.backend.Controlador;

import com.miPortfolio.backend.Modelo.Educacion;
import com.miPortfolio.backend.Servicio.EducacionServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins ={"https://argentinaprograma-frontend.web.app"})
public class EducacionControlador {
    
@Autowired
EducacionServicio educacionServ;
  
@GetMapping("/educacion/mostrar")
@ResponseBody
public List<Educacion> mostrarEducacion(){
    
    return educacionServ.mostrarEducacion();
}

@PostMapping("/educacion/crear")
public void crearEducacion(@RequestBody Educacion educacion){
    educacionServ.crearEducacion(educacion);
}

@PutMapping("/educacion/editar/{id}")
public Educacion editarEducacion(@RequestBody Educacion educacion, @PathVariable Long id){
    
    Educacion edu = educacionServ.encontrarEducacion(id);
   
   edu.setTitulo(educacion.getTitulo());
   edu.setIcono(educacion.getIcono());
   edu.setInstitucion(educacion.getInstitucion());
   edu.setAnio(educacion.getAnio());
   edu.setWeb(educacion.getWeb());
   
   educacionServ.crearEducacion(edu);
   return edu;
}


@DeleteMapping("/educacion/{id}")
public void borrarEducacion(@PathVariable Long id){
    educacionServ.borrarEducacion(id);
}
}

