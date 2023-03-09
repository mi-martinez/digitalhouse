package com.grupo6.apigestionreservas.dto;

import com.grupo6.apigestionreservas.model.Categoria;
import com.grupo6.apigestionreservas.model.Imagen;
import com.grupo6.apigestionreservas.model.Politica;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
    public class ProductoDTO {
        private Long id;
        @NotNull
        private String titulo;
        private Double precio;
        private Double latitud;
        private Double longitud;
        @NotNull
        private Categoria categoria;
        @NotNull
        private Set<Politica> politicas;
        @NotNull
        private List<Imagen> imagenes;

    public ProductoDTO(Long id, @NotNull String titulo, Double precio, Double latitud, Double longitud, @NotNull Categoria categoria,@NotNull Set<Politica> politicas, @NotNull List<Imagen> imagenes) {
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        this.latitud = latitud;
        this.longitud = longitud;
        this.categoria = categoria;
        this.politicas = politicas;
        this.imagenes = imagenes;
    }
    }


