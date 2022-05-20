package com.miPortfolio.backend.Servicio;

import com.miPortfolio.backend.Modelo.HabilidadesBlandas;
import com.miPortfolio.backend.Repositorio.HabilidadesBlandasRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HabilidadesBlandasServicio {
    @Autowired
    HabilidadesBlandasRepositorio habilidadesBlandasRepo;
    
    public void crearHabilidadesBlandas(HabilidadesBlandas habilidadesBlandas)
    {
        habilidadesBlandasRepo.save(habilidadesBlandas);
    }
    
    public void borrarHabilidadesBlandas(Long id){
        habilidadesBlandasRepo.deleteById(id);
    }
    
    public List<HabilidadesBlandas> mostrarHabilidadesBlandas(){
      return  habilidadesBlandasRepo.findAll();
    }
}


