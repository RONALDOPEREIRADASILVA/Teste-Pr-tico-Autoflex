package com.factory.mrp.repository;
//Folder address.
import com.foctory.mrp.model.Product;
//Imports your model.
import org.springframework.data.jpa.repository.jpaRepository;
//Spring magic tool
import org.springframework.stereotype.Repository;
//This is a repo.

//@Repository: Tells Spring that this interface handles databasaoperations
@Repository
public interface ProductRepository extendsjpaRepository , Long> {
    
}