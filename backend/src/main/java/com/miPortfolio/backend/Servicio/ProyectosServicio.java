package com.miPortfolio.backend.Servicio;

import com.miPortfolio.backend.Modelo.Proyectos;
import com.miPortfolio.backend.Repositorio.ProyectosRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProyectosServicio {
    @Autowired
    ProyectosRepositorio proyectosRepo;
    
    public void crearProyectos(Proyectos proyectos)
    {
        proyectosRepo.save(proyectos);
    }
    
    public void borrarProyectos(Long id){
        proyectosRepo.deleteById(id);
    }
    
    public List<Proyectos> mostrarProyectos(){
      return  proyectosRepo.findAll();
    }
}

