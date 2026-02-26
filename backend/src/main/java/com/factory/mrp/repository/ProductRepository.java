package com.factory.mrp.repository;
//Folder address.
import com.factory.mrp.model.Product;
//Imports your model.
import org.springframework.data.jpa.repository.JpaRepository;
//Spring magic tool
import org.springframework.stereotype.Repository;
//This is a repo.

//@Repository: Tells Spring that this interface handles database operations
@Repository
public interface ProductRepository extends JpaRepository <Product , Long> {
}