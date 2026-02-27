package com.factory.mrp.repository;

import com.factory.mrp.model.Product;
import com.factory.mrp.model.ProductIngredient;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository
;import java.util.List;


@Repository
public interface ProductIngredientRepository extends JpaRepository<ProductIngredient , Long>{

    List<ProductIngredient> findByProduct(Product product);
}
    

