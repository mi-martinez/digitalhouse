package com.grupo6.apigestionreservas.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo6.apigestionreservas.dto.CategoriaDTO;
import com.grupo6.apigestionreservas.model.Categoria;
import com.grupo6.apigestionreservas.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoriaService {
    @Autowired
    private CategoriaRepository categoriaRepository;
    @Autowired
    private ObjectMapper mapper;

    public List<CategoriaDTO> findAll() {
        List<Categoria> categorias = categoriaRepository.findAll();
        List<CategoriaDTO> categoriaDTOS = new ArrayList<>();
        categorias.forEach(categoria -> categoriaDTOS.add(mapper.convertValue(categoria, CategoriaDTO.class)));
        return categoriaDTOS;
    }

    public Integer create(CategoriaDTO categoriaDTO) {
        return  categoriaRepository.save(mapper.convertValue(categoriaDTO,Categoria.class)).getId();
    }

    public void update(Integer id, CategoriaDTO categoriaDTO) {
        //TODO Implementar el método update del servicio categoria
//        Categoria categoria = categoriaRepository.findById(id).orElse();
    }

    public void delete(Integer id) {
        categoriaRepository.deleteById(id);
    }

}
