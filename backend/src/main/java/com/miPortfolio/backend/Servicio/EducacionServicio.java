package com.miPortfolio.backend.Servicio;

import com.miPortfolio.backend.Modelo.Educacion;
import com.miPortfolio.backend.Repositorio.EducacionRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EducacionServicio {
    @Autowired
    EducacionRepositorio educacionRepo;
    
    public void crearEducacion(Educacion educacion)
    {
        educacionRepo.save(educacion);
    }
    
    public void borrarEducacion(Long id){
        educacionRepo.deleteById(id);
    }
    
    public List<Educacion> mostrarEducacion(){
      return  educacionRepo.findAll();
    }
}

