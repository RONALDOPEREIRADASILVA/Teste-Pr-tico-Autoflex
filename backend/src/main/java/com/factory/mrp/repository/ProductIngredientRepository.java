package com.factory.mrp.repository;

import com.factory.mrp.model.ProductIngredient;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductIngredientRepository extends org.springframework.data.jpa.repository.JpaRepository<ProductIngredient , Long>{}
    

