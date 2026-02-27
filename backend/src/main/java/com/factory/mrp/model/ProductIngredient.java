package com.factory.mrp.model;

import jakarta.persistence.*;

//this class represents the association table
@Entity
@Table(name = "product_ingredients")
public class ProductIngredient {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public Product getProduct() {
    return product;
}

public void setProduct(Product product) {
    this.product = product;
}

public RawMaterial getRawMaterial() {
    return rawMaterial;
}

public void setRawMaterial(RawMaterial rawMaterial) {
    this.rawMaterial = rawMaterial;
}

// Many ingredient records can belong to a single product.
@ManyToOne
@JoinColumn(name = "product_id", nullable = false)
private Product product;

@ManyToOne
@JoinColumn(name= "raw_material_id", nullable = false)
private RawMaterial rawMaterial;
}
