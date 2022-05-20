package com.miPortfolio.backend.Servicio;

import com.miPortfolio.backend.Modelo.Persona;
import com.miPortfolio.backend.Repositorio.PersonaRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaServicio {
    @Autowired
    PersonaRepositorio personaRepo;
    
    public void crearPersona(Persona persona)
    {
        personaRepo.save(persona);
    }
    
    public void borrarPersona(Long id){
        personaRepo.deleteById(id);
    }
    
    public List<Persona> mostrarPersona(){
      return  personaRepo.findAll();
    }
}
