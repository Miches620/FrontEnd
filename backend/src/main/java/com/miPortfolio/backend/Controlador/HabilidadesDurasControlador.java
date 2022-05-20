package com.miPortfolio.backend.Controlador;

import com.miPortfolio.backend.Modelo.HabilidadesDuras;
import com.miPortfolio.backend.Servicio.HabilidadesDurasServicio;
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
public class HabilidadesDurasControlador {
    
@Autowired
HabilidadesDurasServicio habilidadesDurasServ;
  
@GetMapping("/habilidadesDuras")
@ResponseBody
public List<HabilidadesDuras> mostrarHabilidadesDuras(){
    
    return habilidadesDurasServ.mostrarHabilidadesDuras();
}

@PostMapping("/habilidadesDuras")
public void crearHabilidadesDuras(@RequestBody HabilidadesDuras habilidadesDuras){
    habilidadesDurasServ.crearHabilidadesDuras(habilidadesDuras);
}

@DeleteMapping("/habilidadesDuras/{id}")
public void borrarHabilidadesDuras(@PathVariable Long id){
    habilidadesDurasServ.borrarHabilidadesDuras(id);
}
}


