package com.grupo6.apigestionreservas.service;

import com.grupo6.apigestionreservas.dto.CategoriaDTO;
import com.grupo6.apigestionreservas.dto.ProductoDTO;
import com.grupo6.apigestionreservas.model.Categoria;
import com.grupo6.apigestionreservas.model.Ciudad;
import com.grupo6.apigestionreservas.model.Producto;
import com.grupo6.apigestionreservas.repository.CategoriaRepository;
import com.grupo6.apigestionreservas.repository.CiudadRepository;
import com.grupo6.apigestionreservas.repository.ProductoRepository;
import com.grupo6.apigestionreservas.util.NotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Autowired
    private CiudadRepository ciudadRepository;

    @Autowired
    private ModelMapper modelMapper;

    public ProductoDTO crearProducto(ProductoDTO productoDTO) {
        Producto producto = modelMapper.map(productoDTO, Producto.class);
        Producto nuevoProducto = productoRepository.save(producto);
        ProductoDTO nuevoProductoDTO = modelMapper.map(nuevoProducto, ProductoDTO.class);
        return nuevoProductoDTO;
    }

    public List<ProductoDTO> listarProductos() {
        List<Producto> productos = productoRepository.findAll();
        List<ProductoDTO> productoDTOS = new ArrayList<>();
        productos.forEach(producto -> productoDTOS.add(modelMapper.map(producto, ProductoDTO.class)));
        return productoDTOS;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> buscarProductoPorId(Long id) {
        Optional<Producto> producto = productoRepository.findById(id);
        if (producto.isPresent()) {
            ProductoDTO productoDTO = modelMapper.map(producto.get(), ProductoDTO.class);
            return ResponseEntity.ok(productoDTO);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Producto no encontrado");
        }
    }

    public List<ProductoDTO> getProductosByCiudad(Long ciudadId) {
        Optional<Ciudad> ciudad = ciudadRepository.findById(ciudadId);
        if (ciudad.isPresent()) {
            List<Producto> productos = productoRepository.findByCiudad(ciudad.get());
            List<ProductoDTO> productosDTO = productos.stream()
                    .map(producto -> modelMapper.map(producto, ProductoDTO.class))
                    .collect(Collectors.toList());
            return productosDTO;
        } else {
            throw new NotFoundException("Ciudad no encontrada");
        }
    }

    public List<ProductoDTO> getProductosByCategoria(Long categoriaId) {
        Integer idCategoria = categoriaId.intValue();
        Categoria categoria = categoriaRepository.findById(idCategoria)
                .orElseThrow(() -> new NotFoundException("Categoria no encontrada"));

        List<Producto> productos = productoRepository.findByCategoria(categoria);
        List<ProductoDTO> productosDTO = productos.stream()
                .map(producto -> modelMapper.map(producto, ProductoDTO.class))
                .collect(Collectors.toList());

        return productosDTO;
    }
}


