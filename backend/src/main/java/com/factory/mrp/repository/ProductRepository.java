package com.factory.mrp.repository;
//Folder address.
import com.foctory.mrp.model.Product;
//Imports your model.
import org.springframework.data.jpa.repository.JpaRepository;
//Spring magic tool
import org.springframework.stereotype.Repository;
//This is a repo.

//@Repository: Tells Spring that this interface handles databasaoperations
@Repository
public interface ProductRepository extends JpaRepository <Product , Long> {
    
}