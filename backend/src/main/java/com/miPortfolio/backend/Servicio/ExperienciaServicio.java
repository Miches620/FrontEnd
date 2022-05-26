package com.miPortfolio.backend.Servicio;

import com.miPortfolio.backend.Modelo.Experiencia;
import com.miPortfolio.backend.Repositorio.ExperienciaRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExperienciaServicio {
    @Autowired
    ExperienciaRepositorio experienciaRepo;
    
    public void crearExperiencia(Experiencia experiencia)
    {
        experienciaRepo.save(experiencia);
    }
    
    public void borrarExperiencia(Long id){
        experienciaRepo.deleteById(id);
    }
    
    public List<Experiencia> mostrarExperiencia(){
      return  experienciaRepo.findAll();
    }
    
    public Experiencia encontrarExperiencia(Long id){
        Experiencia experiencia = experienciaRepo.findById(id).orElse(null);
        return experiencia;
    }
}

