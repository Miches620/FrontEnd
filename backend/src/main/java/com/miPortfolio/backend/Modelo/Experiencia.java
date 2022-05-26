package com.miPortfolio.backend.Modelo;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;
@Getter
@Entity
@Setter
public class Experiencia {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;
    @Basic
    private String logo;
    private String empresa;
    private String puesto;

    public Experiencia(long id, String logo, String empresa, String puesto) {
        this.id = id;
        this.logo = logo;
        this.empresa = empresa;
        this.puesto = puesto;
    }

    public Experiencia() {
    }



}