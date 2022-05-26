package com.miPortfolio.backend.Modelo;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;
@Setter
@Getter
@Entity
public class Persona {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;
    @Basic
    private String nombre;
    private int edad;
    private String titulo;
    private String img;

    public Persona(long id, String nombre, int edad, String titulo, String img) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.titulo = titulo;
        this.img = img;
    }

    public Persona() {
    }

}
