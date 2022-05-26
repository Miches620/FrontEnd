package com.miPortfolio.backend.Servicio;

import com.miPortfolio.backend.Modelo.HabilidadesDuras;
import com.miPortfolio.backend.Repositorio.HabilidadesDurasRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HabilidadesDurasServicio {
    @Autowired
    HabilidadesDurasRepositorio habilidadesDurasRepo;
    
    public void crearHabilidadDura(HabilidadesDuras habilidadesDuras)
    {
        habilidadesDurasRepo.save(habilidadesDuras);
    }
    
    public void borrarHabilidadDura(Long id){
        habilidadesDurasRepo.deleteById(id);
    }
    
    public List<HabilidadesDuras> mostrarHabilidadesDuras(){
      return  habilidadesDurasRepo.findAll();
    }
    
     public HabilidadesDuras encontrarHDura(Long id){
        HabilidadesDuras hDuras = habilidadesDurasRepo.findById(id).orElse(null);
        return hDuras;
    }
}
