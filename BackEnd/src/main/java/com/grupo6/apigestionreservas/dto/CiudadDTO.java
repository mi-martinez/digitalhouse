package com.grupo6.apigestionreservas.dto;


import com.grupo6.apigestionreservas.model.Pais;
import com.grupo6.apigestionreservas.model.Producto;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class CiudadDTO {

    private Long id;

    private String nombre;

    private Set<Producto> productos;

    private Pais pais;
}
