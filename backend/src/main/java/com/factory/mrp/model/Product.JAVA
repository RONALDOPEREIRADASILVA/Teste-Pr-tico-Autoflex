package com.factory.mrp.model;
//Folder address.

import jakarta.persistence.*;
//Db Tools.

import java.math.BigDecimal;
//For money and precision.


//@Entity :Informs java that this class represents table in Mysql.
@Entity
@Table(name = "products")
public class Product {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;


private String name;

    private BigDecimal price;

    private BigDecimal marketValue;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }

    public BigDecimal getMarketValue() { return marketValue; }
    public void setMarketValue(BigDecimal marketValue) { this.marketValue = marketValue; }
}
