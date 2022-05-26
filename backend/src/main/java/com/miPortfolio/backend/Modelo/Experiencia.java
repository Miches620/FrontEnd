package com.miPortfolio.backend.Modelo;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

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

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getPuesto() {
        return puesto;
    }

    public void setPuesto(String puesto) {
        this.puesto = puesto;
    }

}