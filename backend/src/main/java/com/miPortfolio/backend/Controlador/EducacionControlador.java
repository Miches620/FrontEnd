package com.miPortfolio.backend.Controlador;

import com.miPortfolio.backend.Modelo.Educacion;
import com.miPortfolio.backend.Servicio.EducacionServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EducacionControlador {
    
@Autowired
EducacionServicio educacionServ;
  
@GetMapping("/educacion")
@ResponseBody
public List<Educacion> mostrarEducacion(){
    
    return educacionServ.mostrarEducacion();
}

@PostMapping("/educacion")
public void crearEducacion(@RequestBody Educacion educacion){
    educacionServ.crearEducacion(educacion);
}

@DeleteMapping("/educacion/{id}")
public void borrarEducacion(@PathVariable Long id){
    educacionServ.borrarEducacion(id);
}
}

