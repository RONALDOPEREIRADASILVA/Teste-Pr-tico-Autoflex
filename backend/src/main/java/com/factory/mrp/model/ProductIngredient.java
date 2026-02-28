package com.factory.mrp.model;
import jakarta.persistence.*;
import java.math.BigDecimal;
@Entity
@Table(name = "product_ingredients")
public class ProductIngredient {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private BigDecimal quantityNeeded;

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

@ManyToOne
@JoinColumn(name = "product_id", nullable = false)
private Product product;

@ManyToOne
@JoinColumn(name= "raw_material_id", nullable = false)
private RawMaterial rawMaterial;

public BigDecimal getQuantityNeeded() {
return quantityNeeded;
}

public void setQuantityNeeded(BigDecimal quantityNeeded) {
this.quantityNeeded = quantityNeeded;
}
}
