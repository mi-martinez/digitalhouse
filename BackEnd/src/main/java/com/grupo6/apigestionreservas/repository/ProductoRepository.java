package com.grupo6.apigestionreservas.repository;

import com.grupo6.apigestionreservas.model.Categoria;
import com.grupo6.apigestionreservas.model.Ciudad;
import com.grupo6.apigestionreservas.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByCiudad(Ciudad ciudad);
    List<Producto> findByCategoria(Categoria categoria);
    List<Producto> findAllByCategoriaId(Long categoriaId);
}
