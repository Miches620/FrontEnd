package com.miPortfolio.backend.Modelo;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
@Getter
@Entity
public class HabilidadesBlandas {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;
    @Basic
    private String habilidad;
    private int porcentaje;

    public HabilidadesBlandas(long id, String habilidad, int porcentaje) {
        this.id = id;
        this.habilidad = habilidad;
        this.porcentaje = porcentaje;
    }

    public HabilidadesBlandas() {
    }

    public void setHabilidad(String habilidad) {
        this.habilidad = habilidad;
    }

    public void setPorcentaje(int porcentaje) {
        this.porcentaje = porcentaje;
    }


}