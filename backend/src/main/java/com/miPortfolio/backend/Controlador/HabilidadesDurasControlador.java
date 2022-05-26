package com.miPortfolio.backend.Controlador;

import com.miPortfolio.backend.Modelo.HabilidadesDuras;
import com.miPortfolio.backend.Servicio.HabilidadesDurasServicio;
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
@CrossOrigin(origins ={"https://argentinaprograma-frontend.web.app"})
public class HabilidadesDurasControlador {
    
@Autowired
HabilidadesDurasServicio habilidadesDurasServ;
  
@GetMapping("/hDuras/mostrar")
@ResponseBody
public List<HabilidadesDuras> mostrarHabilidadesDuras(){
    
    return habilidadesDurasServ.mostrarHabilidadesDuras();
}

@PostMapping("/hDuras/crear")
public void crearHabilidadesDuras(@RequestBody HabilidadesDuras habilidadesDuras){
    habilidadesDurasServ.crearHabilidadDura(habilidadesDuras);
}

@PutMapping("/hDuras/editar/{id}")
public HabilidadesDuras editarHDuras(@RequestBody HabilidadesDuras hDuras, @PathVariable Long id){
    
    HabilidadesDuras hd = habilidadesDurasServ.encontrarHDura(id);

    hd.setHabilidad(hDuras.getHabilidad());
    hd.setPorcentaje(hDuras.getPorcentaje());
   
   habilidadesDurasServ.crearHabilidadDura(hd);
   return hd;
}

@DeleteMapping("/hDuras/{id}")
public void borrarHabilidadDura(@PathVariable Long id){
    habilidadesDurasServ.borrarHabilidadDura(id);
}
}


