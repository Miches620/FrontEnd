package com.miPortfolio.backend.Servicio;

import com.miPortfolio.backend.Modelo.Persona;
import com.miPortfolio.backend.Repositorio.PersonaRepositorio;
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
    
    public Persona encontrarPersona(long id){
        Persona per = personaRepo.findById(id).orElse(null);
        return per;
    }
    
    public void editarPersona(Persona persona){
        personaRepo.save(persona);
    }
}
