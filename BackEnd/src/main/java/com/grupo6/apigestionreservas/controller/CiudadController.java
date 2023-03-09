package com.grupo6.apigestionreservas.controller;

import com.grupo6.apigestionreservas.dto.ProductoDTO;
import com.grupo6.apigestionreservas.model.Ciudad;
import com.grupo6.apigestionreservas.model.Producto;
import com.grupo6.apigestionreservas.repository.CiudadRepository;
import com.grupo6.apigestionreservas.service.CiudadService;
import com.grupo6.apigestionreservas.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/ciudades")

public class CiudadController {

    @Autowired
    private CiudadRepository ciudadRepository;

    @Autowired
    private ProductoService productoService;
    @Autowired
    private CiudadService ciudadService;
    @GetMapping
    public List<Ciudad> getCiudades() {
        return ciudadService.getCiudades();
    }
}


