package com.miPortfolio.backend.Controlador;

import com.miPortfolio.backend.Modelo.Persona;
import com.miPortfolio.backend.Servicio.PersonaServicio;
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
public class PersonaControlador {
    
@Autowired
PersonaServicio personaServ;
  
@GetMapping("/persona/{id}")
@ResponseBody
public Persona encontrarPersona(@PathVariable Long id){
    return personaServ.encontrarPersona(id);
}

@PostMapping("/persona/crear")
public void crearPersona(@RequestBody Persona persona){
    personaServ.crearPersona(persona);
}

@PutMapping("/persona/editar/{id}")
public void editarExperiencia(@RequestBody Persona persona, @PathVariable Long id){
    
   personaServ.editarPersona(persona);
}
@DeleteMapping("/persona/{id}")
public void borrarPersona(@PathVariable Long id){
    personaServ.borrarPersona(id);
}
}
