package com.grupo6.apigestionreservas.controller;

import com.grupo6.apigestionreservas.dto.ProductoDTO;
import com.grupo6.apigestionreservas.model.Ciudad;
import com.grupo6.apigestionreservas.model.Producto;
import com.grupo6.apigestionreservas.repository.ProductoRepository;
import com.grupo6.apigestionreservas.service.CiudadService;
import com.grupo6.apigestionreservas.service.ProductoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @Autowired
    private CiudadService ciudadService;

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

    @GetMapping("/producto/{id}")
    public ResponseEntity<ProductoDTO> buscarProductoPorId(@PathVariable Long id) {
        return productoService.buscarProductoPorId(id);
    }

    @GetMapping("ciudades/{ciudadId}")
    public List<ProductoDTO> getProductosByCiudad(@PathVariable Long ciudadId) {
        return productoService.getProductosByCiudad(ciudadId);
    }
        @GetMapping("/categoria/{categoriaId}")
    public List<ProductoDTO> getProductosByCategoria(@PathVariable Long categoriaId) {
        List<Producto> productos = productoRepository.findAllByCategoriaId(categoriaId);
        return productos.stream()
               .map(producto -> modelMapper.map(producto, ProductoDTO.class))
               .collect(Collectors.toList());
    }

    @GetMapping("/aleatorio")
    public List<ProductoDTO> listarProductosAleatorios() {
        return productoService.listarProductosAleatorios();
    }

}








