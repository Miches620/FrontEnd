package com.miPortfolio.backend.Controlador;

import com.miPortfolio.backend.Modelo.Experiencia;
import com.miPortfolio.backend.Servicio.ExperienciaServicio;
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
public class ExperienciaControlador {
    
@Autowired
ExperienciaServicio experienciaServ;
  
@GetMapping("/experiencia")
@ResponseBody
public List<Experiencia> mostrarExperiencia(){
    
    return experienciaServ.mostrarExperiencia();
}

@PostMapping("/experiencia")
public void crearExperiencia(@RequestBody Experiencia experiencia){
    experienciaServ.crearExperiencia(experiencia);
}

@DeleteMapping("/experiencia/{id}")
public void borrarExperiencia(@PathVariable Long id){
    experienciaServ.borrarExperiencia(id);
}
}


