package com.miPortfolio.backend.Controlador;

import com.miPortfolio.backend.Modelo.HabilidadesBlandas;
import com.miPortfolio.backend.Servicio.HabilidadesBlandasServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins ={"http://localhost:4200"})
public class HabilidadesBlandasControlador {
    
@Autowired
HabilidadesBlandasServicio habilidadesBlandasServ;
  
@GetMapping("/hBlandas/mostrar")
@ResponseBody
public List<HabilidadesBlandas> mostrarHabilidadesBlandas(){
    
    return habilidadesBlandasServ.mostrarHabilidadesBlandas();
}

@PostMapping("/hBlandas/crear")
public void crearHabilidadesBlandas(@RequestBody HabilidadesBlandas habilidadesBlandas){
    habilidadesBlandasServ.crearHabilidadBlanda(habilidadesBlandas);
}

@PutMapping("/hBlandas/editar/{id}")
public HabilidadesBlandas editarHBlandas(@RequestBody HabilidadesBlandas hBlandas, @PathVariable Long id){
    
    HabilidadesBlandas hb = habilidadesBlandasServ.encontrarHBlanda(id);

    hb.setHabilidad(hBlandas.getHabilidad());
    hb.setPorcentaje(hBlandas.getPorcentaje());
   
   habilidadesBlandasServ.crearHabilidadBlanda(hb);
   return hb;
}

@DeleteMapping("/hBlandas/{id}")
public void borrarHabilidadesBlandas(@PathVariable Long id){
    habilidadesBlandasServ.borrarHabilidadBlanda(id);
}
}

