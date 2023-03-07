package com.grupo6.apigestionreservas.dto;

import com.grupo6.apigestionreservas.model.Imagen;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
    public class ProductoDTO {
        private Long id;
        @NotNull
        private String titulo;
        private Double precio;
        private Double latitud;
        private Double longitud;
        @NotNull
        private String categoria;
        @NotNull
        private String politicas;
        @NotNull
        private List<Imagen> imagenes;
    }


