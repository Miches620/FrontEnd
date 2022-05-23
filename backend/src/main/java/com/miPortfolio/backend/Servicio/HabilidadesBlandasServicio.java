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
    
    public void crearHabilidadBlanda(HabilidadesBlandas habilidadesBlandas)
    {
        habilidadesBlandasRepo.save(habilidadesBlandas);
    }
    
    public void borrarHabilidadBlanda(Long id){
        habilidadesBlandasRepo.deleteById(id);
    }
    
    public List<HabilidadesBlandas> mostrarHabilidadesBlandas(){
      return  habilidadesBlandasRepo.findAll();
    }
    
    public HabilidadesBlandas encontrarHBlanda(Long id){
        HabilidadesBlandas hBlandas = habilidadesBlandasRepo.findById(id).orElse(null);
        return hBlandas;
    }
}


