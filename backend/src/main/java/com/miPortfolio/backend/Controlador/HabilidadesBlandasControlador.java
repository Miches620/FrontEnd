package com.miPortfolio.backend.Controlador;

import com.miPortfolio.backend.Modelo.HabilidadesBlandas;
import com.miPortfolio.backend.Servicio.HabilidadesBlandasServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HabilidadesBlandasControlador {
    
@Autowired
HabilidadesBlandasServicio habilidadesBlandasServ;
  
@GetMapping("/habilidadesBlandas")
@ResponseBody
public List<HabilidadesBlandas> mostrarHabilidadesBlandas(){
    
    return habilidadesBlandasServ.mostrarHabilidadesBlandas();
}

@PostMapping("/habilidadesBlandas")
public void crearHabilidadesBlandas(@RequestBody HabilidadesBlandas habilidadesBlandas){
    habilidadesBlandasServ.crearHabilidadesBlandas(habilidadesBlandas);
}

@DeleteMapping("/habilidadesBlandas/{id}")
public void borrarHabilidadesBlandas(@PathVariable Long id){
    habilidadesBlandasServ.borrarHabilidadesBlandas(id);
}
}

