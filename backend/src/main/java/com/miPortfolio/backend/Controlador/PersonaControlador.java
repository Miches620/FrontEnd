package com.miPortfolio.backend.Controlador;

import com.miPortfolio.backend.Modelo.Persona;
import com.miPortfolio.backend.Servicio.PersonaServicio;
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
public class PersonaControlador {
    
@Autowired
PersonaServicio personaServ;
  
@GetMapping("/persona")
@ResponseBody
public List<Persona> mostrarPersona(){
    
    return personaServ.mostrarPersona();
}

@PostMapping("/persona")
public void crearPersona(@RequestBody Persona persona){
    personaServ.crearPersona(persona);
}

@DeleteMapping("/persona/{id}")
public void borrarPersona(@PathVariable Long id){
    personaServ.borrarPersona(id);
}
}
