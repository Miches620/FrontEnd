package com.miPortfolio.backend.Controlador;

import com.miPortfolio.backend.Modelo.Experiencia;
import com.miPortfolio.backend.Servicio.ExperienciaServicio;
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
@CrossOrigin(origins ={"http://localhost:4200"})
public class ExperienciaControlador {
    
@Autowired
ExperienciaServicio experienciaServ;
  
@GetMapping("/experiencia/mostrar")
@ResponseBody
public List<Experiencia> mostrarExperiencia(){
    
    return experienciaServ.mostrarExperiencia();
}

@PostMapping("/experiencia/crear")
public void crearExperiencia(@RequestBody Experiencia experiencia){
    experienciaServ.crearExperiencia(experiencia);
}

@PutMapping("/experiencia/editar/{id}")
public Experiencia editarExperiencia(@RequestBody Experiencia experiencia, @PathVariable Long id){
    
    Experiencia exp = experienciaServ.encontrarExperiencia(id);

    exp.setLogo(experiencia.getLogo());
    exp.setEmpresa(experiencia.getEmpresa());
    exp.setPuesto(experiencia.getPuesto());
   
   experienciaServ.crearExperiencia(exp);
   return exp;
}

@DeleteMapping("/experiencia/{id}")
public void borrarExperiencia(@PathVariable Long id){
    experienciaServ.borrarExperiencia(id);
}
}


