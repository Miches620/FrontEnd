package com.miPortfolio.backend.Controlador;

import com.miPortfolio.backend.Modelo.Proyectos;
import com.miPortfolio.backend.Servicio.ProyectosServicio;
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
public class ProyectosControlador {
    
@Autowired
ProyectosServicio proyectosServ;
  
@GetMapping("/proyectos/mostrar")
@ResponseBody
public List<Proyectos> mostrarProyectos(){
    
    return proyectosServ.mostrarProyectos();
}

@PostMapping("/proyectos/crear")
public void crearProyecto(@RequestBody Proyectos proyecto){
    proyectosServ.crearProyecto(proyecto);
}

@PutMapping("/proyectos/editar/{id}")
public Proyectos editarProyecto(@RequestBody Proyectos proyecto, @PathVariable Long id){
    
    Proyectos pro = proyectosServ.encontrarProyecto(id);

    pro.setImg(proyecto.getImg());
    pro.setProyecto(proyecto.getProyecto());
    pro.setDescripcion(proyecto.getDescripcion());
   
   proyectosServ.crearProyecto(pro);
   return pro;
}

@DeleteMapping("/proyectos/{id}")
public void borrarProyectos(@PathVariable Long id){
    proyectosServ.borrarProyectos(id);
}
}


