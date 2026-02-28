package com.factory.mrp.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name ="raw_materials")
public class RawMaterial{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
@Column(nullable = false)
private String name;

private BigDecimal stockQuantity;

private BigDecimal unitCost;


public Long getId() { return id; }
public void setId(Long id) { this.id = id; }

public String getName() { return name; }
public void setName(String name) { this.name = name; }

public BigDecimal getStockQuantity() { return stockQuantity; }
public void setStockQuantity(BigDecimal stockQuantity) { this.stockQuantity = stockQuantity; }

public BigDecimal getUnitCost() { return unitCost; }
public void setUnitCost(BigDecimal unitCost) { this.unitCost = unitCost; }
}