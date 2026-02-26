package com.factory.mrp.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.factory.mrp.model.RawMaterial;

import org.springframework.stereotype.Repository;

//Interface that bridges with this database.
@Repository
public interface RawMaterialRepository extends JpaRepository<RawMaterial , Long> {}