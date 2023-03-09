package com.grupo6.apigestionreservas.config;
import com.grupo6.apigestionreservas.dto.CategoriaConCantidadProductosDTO;
import com.grupo6.apigestionreservas.model.Categoria;
import com.grupo6.apigestionreservas.model.Producto;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Set;

@Configuration
public class ModelMapperConfig {
    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();

        modelMapper.createTypeMap(Categoria.class, CategoriaConCantidadProductosDTO.class)
                .addMapping(Categoria::getId, CategoriaConCantidadProductosDTO::setId)
                .addMapping(Categoria::getTitulo, CategoriaConCantidadProductosDTO::setTitulo)
                .addMapping(Categoria::getDescripcion, CategoriaConCantidadProductosDTO::setDescripcion)
                .addMapping(Categoria::getUrlImagen, CategoriaConCantidadProductosDTO::setUrlImagen)
                .addMappings(mapper -> mapper.using(ctx -> {
                    Set<Producto> productos = (Set<Producto>) ctx.getSource();
                    return productos != null ? productos.size() : 0;
                }).map(Categoria::getProductos, CategoriaConCantidadProductosDTO::setCantidadProductos));


        return modelMapper;
    }
}
