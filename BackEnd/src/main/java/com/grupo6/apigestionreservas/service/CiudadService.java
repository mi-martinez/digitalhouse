package com.grupo6.apigestionreservas.service;

import com.grupo6.apigestionreservas.config.RestExceptionHandler;
import com.grupo6.apigestionreservas.model.Ciudad;
import com.grupo6.apigestionreservas.repository.CategoriaRepository;
import com.grupo6.apigestionreservas.repository.CiudadRepository;
import com.grupo6.apigestionreservas.util.NotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class CiudadService {

    @Autowired
    private CiudadRepository ciudadRepository;
    @Autowired
    private ModelMapper mapper;

    public List<Ciudad> getCiudades() {
        List<Ciudad> ciudades = ciudadRepository.findAll();
        return (ciudades);
    }

    public Ciudad getCiudadById(Long id) throws RestExceptionHandler {
        Optional<Ciudad> ciudadOptional = ciudadRepository.findById(id);
        if(ciudadOptional.isPresent()) {
            return ciudadOptional.get();
        } else {
            throw new NotFoundException("No se encontró el id");
        }
    }
}
