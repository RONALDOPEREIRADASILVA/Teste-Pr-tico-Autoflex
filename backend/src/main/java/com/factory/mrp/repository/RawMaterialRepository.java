package com.factory.mrp.repository;


import com.factory.mrp.model.RawMatrial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframewok.stereotype.Repository;

//Interface that bridges with this database.
@Repository
public interface RawMaterialRepository extends JpaRepository<RawMaterial, Long> {
    
}