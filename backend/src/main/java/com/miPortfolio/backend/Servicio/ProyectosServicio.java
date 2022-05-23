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
    
    public void crearProyecto(Proyectos proyecto)
    {
        proyectosRepo.save(proyecto);
    }
    
    public void borrarProyectos(Long id){
        proyectosRepo.deleteById(id);
    }
    
    public List<Proyectos> mostrarProyectos(){
      return  proyectosRepo.findAll();
    }
    
    public Proyectos encontrarProyecto(long id){
        Proyectos proyecto = proyectosRepo.findById(id).orElse(null);
        return proyecto;
    }
}

