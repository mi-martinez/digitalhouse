package com.grupo6.apigestionreservas.controller;

import com.grupo6.apigestionreservas.dto.ProductoDTO;
import com.grupo6.apigestionreservas.repository.ProductoRepository;
import com.grupo6.apigestionreservas.service.ProductoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping
    public ProductoDTO crearProducto(@RequestBody ProductoDTO productoDTO) {
       return productoService.crearProducto(productoDTO);
    }

    @GetMapping
    public List<ProductoDTO> listarProductos() {
        return productoService.listarProductos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> buscarProductoPorId(@PathVariable Long id) {
        return productoService.buscarProductoPorId(id);
    }

}








